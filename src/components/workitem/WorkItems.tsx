import { Activities } from "../../utils/activity-helper";
import { formatDate } from "../../utils/utils";
import {
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@radix-ui/react-accordion";
import { Badge } from "../ui/Badge";
import { WorkItem } from "./WorkItem.type";
import { StatusIcon, statusColors } from "./StatusIcon";
import Timeline from "../ui/Event";

export function WorkItemComponent({ item }: { item: WorkItem & Activities }) {
    return (
        <AccordionItem value={item.key}>
            <AccordionTrigger className="w-full">
                <div className="flex items-start space-x-2 text-sm">
                    <div>
                        <StatusIcon status={item.status} />
                    </div>

                    <div className="flex-1">
                        {/* <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline whitespace-nowrap"
              onClick={(e) => {
                e.preventDefault(); // Prevent Electron from opening the link in its own window
                (window as any).electron.shell.openExternal(item.url); // Open the link in the default system browser
              }}
            ></a> */}

                        <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-sm text-blue-600">
                                {item.key}
                            </span>
                            <div className="flex flex-1">
                                <Badge
                                    variant={
                                        item.issuetype.name === "Story" ? "default" : "secondary"
                                    }
                                >
                                    {item.issuetype.name}
                                </Badge>
                            </div>

                            <div className="self-end">({item.role.join(",")})</div>
                        </div>

                        <div className="font-medium flex flex-1 items-start flex-col text-start">
                            <div>
                                <span className="text-pretty font-semibold">{item.title}</span>{" "}
                            </div>

                            <div className="flex flex-wrap break-words text-wrap items-start flex-col font-thin text-xs text-gray-400 ">
                                {item.parent.issuetype.name}: {item.parent.key}:{" "}
                                {item.parent.title}
                                {item.recentActivity.map((activity, i) => (
                                    <span
                                        key={i}
                                        className="mr-2 break-all overflow-hidden max-h-20"
                                    >
                                        <span className="text-red-400">{activity.type}</span>:{" "}
                                        {activity.content}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <div className="space-y-2 ml-4 mt-2">
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <div className="flex items-center space-x-2">
                        <Badge className={statusColors[item.status]}>{item.status}</Badge>
                        <Badge variant="outline">{item.assignee.displayName}</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Timeline
                            layout="horizontal"
                            events={item.hoursLogged?.map((timelog) => ({
                                date: formatDate(timelog.createdAt),
                                title: timelog.author.displayName,
                                description: timelog.timeSpent,
                            }))}
                        />
                    </div>

                    {item.comments.length > 0 && (
                        <div>
                            <h4 className="text-sm font-semibold">Comments:</h4>
                            <Timeline
                                layout="vertical"
                                events={item.comments.map((timelog) => ({
                                    date: formatDate(timelog.createdAt),
                                    title: timelog.author.displayName,
                                    description: timelog.content,
                                }))}
                            />
                        </div>
                    )}
                </div>
            </AccordionContent>
        </AccordionItem>
    );
}

