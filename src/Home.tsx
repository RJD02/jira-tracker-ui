import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./components/ui/Card";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "./components/ui/Avatar";
import { Accordion } from "./components/ui/Accordion";
import { MessageSquare } from "lucide-react";
import { MemberWorkItem } from "./components/workitem/WorkItem.type";
import { WorkItemComponent } from "./components/workitem/WorkItems";
import { getLastNBusinessDays } from "./utils/utils";

interface MemberListProps {
    members: MemberWorkItem[];
}

export default function MemberList(props: MemberListProps) {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1  gap-2 justify-evenly">
                {props.members.map((member, memberIndex) => (
                    <MemberComponent key={memberIndex} member={member} />
                ))}
            </div>
        </div>
    );
}
function MemberComponent({ member }: { member: MemberWorkItem }) {
    const [expandedSections, setExpandedSections] = useState({
        workDone: true,
        plannedWork: true,
        blockers: true,
    } as { [index: string]: any });
    const toggleSection = (section: string) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev?.[section],
        }));
    };
    const hoursLogged =
        [...member.workDone, ...member.plannedWork, ...member.blockers].reduce(
            (acc, item) => {
                return (
                    acc +
                    item.hoursLogged
                        ?.filter((log) => new Date(log.createdAt) > getLastNBusinessDays(1))
                        .filter((log) => log.author.id == member.id)
                        .reduce((acc, item) => acc + item.timeSpentSeconds, 0)
                );
            },
            0
        ) / 3600;
    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>
                            {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </AvatarFallback>
                    </Avatar>
                    <CardTitle className="uppercase">
                        {member.name.replaceAll(".", " ")}
                    </CardTitle>
                    <CardDescription>
                        <span>
                            Participated: {member.workDone.length} | Closed :{" "}
                            {member.workDone.filter((w) => w.statusCategory == "Done").length}{" "}
                            | Planned: {member.plannedWork.length} | Blocked:{" "}
                            {member.blockers.length} | Logged: {hoursLogged} hrs
                        </span>
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <CardDescription
                            className="font-semibold mb-2 cursor-pointer flex items-center"
                            onClick={() => toggleSection("workDone")}
                        >
                            Work Done (Past 24h)
                            <MessageSquare
                                className={`ml-2 h-4 w-4 transition-transform ${expandedSections?.workDone ? "rotate-180" : ""
                                    }`}
                            />
                        </CardDescription>
                        {expandedSections?.workDone !== false && (
                            <Accordion type="single" collapsible className="w-full">
                                <div className="space-y-4">
                                    {member.workDone.map((item, _i) => (
                                        <WorkItemComponent key={item.id} item={item} />
                                    ))}
                                </div>
                            </Accordion>
                        )}
                    </div>
                    <div>
                        <CardDescription
                            className="font-semibold mb-2 cursor-pointer flex items-center"
                            onClick={() => toggleSection("plannedWork")}
                        >
                            Planned Work (Next 24h)
                            <MessageSquare
                                className={`ml-2 h-4 w-4 transition-transform ${expandedSections.plannedWork ? "rotate-180" : ""
                                    }`}
                            />
                        </CardDescription>
                        {expandedSections.plannedWork !== false && (
                            <Accordion type="single" collapsible className="w-full">
                                <div className="space-y-4">
                                    {member.plannedWork.map((item, i) => (
                                        <WorkItemComponent key={i} item={item} />
                                    ))}
                                </div>
                            </Accordion>
                        )}
                    </div>
                    <div>
                        <CardDescription
                            className="font-semibold mb-2 cursor-pointer flex items-center"
                            onClick={() => toggleSection("blockers")}
                        >
                            Blockers
                            <MessageSquare
                                className={`ml-2 h-4 w-4 transition-transform ${expandedSections.blockers ? "rotate-180" : ""
                                    }`}
                            />
                        </CardDescription>
                        {expandedSections.blockers !== false && (
                            <Accordion type="single" collapsible className="w-full">
                                {member.blockers.map((item, i) => (
                                    <WorkItemComponent key={i} item={item} />
                                ))}
                            </Accordion>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

