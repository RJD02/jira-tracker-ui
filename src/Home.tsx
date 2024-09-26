import { useEffect, useState } from "react";
import { Accordion } from "./components/ui/Accordion";
import {
  CheckCircleIcon,
  CheckSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  ListTodoIcon,
  MessageSquare,
} from "lucide-react";
import { MemberWorkItem } from "./components/workitem/WorkItem.type";
import { WorkItemComponent } from "./components/workitem/WorkItems";
import { getLastNBusinessDays } from "./utils/utils";
import { CONFIGURED_PROJECTS, PROJECT } from "./config/config";

interface MemberListProps {
  project: PROJECT;
  members: MemberWorkItem[];
}
interface Stats {
  participated: number;
  closed: number;
  planned: number;
  blocked: number;
  hoursLogged: number;
}

function getParticipantStats(member: MemberWorkItem): Stats {
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

  return {
    participated:
      member.workDone.length +
      member.plannedWork.filter((w) => w.recentActivity.length > 0).length,
    closed: member.workDone.filter((w) => w.statusCategory == "Done").length,
    planned: member.plannedWork.length,
    blocked: member.blockers.length,
    hoursLogged: Math.round(hoursLogged),
  };
}

type MemberWithStats = MemberWorkItem & { stats: Stats };
export default function MemberList(props: MemberListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeParticipant, setActiveParticipant] = useState(0);
  const [participantsPerPage, setParticipantsPerPage] = useState(6);

  useEffect(() => {
    const updateParticipantsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 2560) setParticipantsPerPage(12);
      else if (width >= 1920) setParticipantsPerPage(9);
      else if (width >= 1280) setParticipantsPerPage(6);
      else if (width >= 768) setParticipantsPerPage(4);
      else setParticipantsPerPage(2);
    };

    updateParticipantsPerPage();
    window.addEventListener("resize", updateParticipantsPerPage);
    return () =>
      window.removeEventListener("resize", updateParticipantsPerPage);
  }, []);

  const participants: MemberWithStats[] = props.members.map((member) => ({
    ...member,
    stats: getParticipantStats(member),
  }));
  const indexOfLastParticipant = currentPage * participantsPerPage;
  const indexOfFirstParticipant = indexOfLastParticipant - participantsPerPage;
  const currentParticipants = participants.slice(
    indexOfFirstParticipant,
    indexOfLastParticipant
  );

  const totalPages = Math.ceil(participants.length / participantsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setActiveParticipant((newPage - 1) * participantsPerPage);
  };

  return (
    <div className="">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          <span className="text-amber-500 italic uppercase text-2xl font-bold mr-2">
            {CONFIGURED_PROJECTS.find((p) => p.id === props.project)?.label}
          </span>
          Team Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
          {currentParticipants.map((participant, index) => (
            <button
              key={index}
              className={`p-4 rounded-lg text-left transition-colors ${
                index + indexOfFirstParticipant === activeParticipant
                  ? "bg-gradient-to-br from-teal-100 to-blue-100 border-2 border-teal-300"
                  : "bg-white hover:bg-gray-50 border border-gray-200"
              }`}
              onClick={() =>
                setActiveParticipant(index + indexOfFirstParticipant)
              }
            >
              <div className="font-medium text-lg mb-2 text-gray-800 capitalize">
                {participant.name.split(" ")[0]}
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center text-green-600">
                  <CheckSquareIcon className="w-4 h-4 mr-1" />
                  <span>{participant.stats.closed}</span>
                </div>
                <div className="flex items-center text-blue-600">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  <span>{participant.stats.hoursLogged}</span>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                {participant.stats.participated} tasks participated
              </div>
            </button>
          ))}
        </div>
        <div className="flex justify-center mt-6 gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-full bg-teal-100 text-teal-600 disabled:opacity-50 hover:bg-teal-200"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <span className="flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 text-gray-800 rounded-full font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full bg-blue-100 text-blue-600 disabled:opacity-50 hover:bg-blue-200"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {participants[activeParticipant] && (
        <div className="p-6 bg-white border-t border-gray-200">
          {/* <MemberSummary member={participants[activeParticipant]} /> */}
          <MemberComponent member={participants[activeParticipant]} />
        </div>
      )}
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

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h3
          className="text-lg font-semibold text-teal-800 mb-3 flex items-center"
          onClick={() => toggleSection("workDone")}
        >
          <CheckCircleIcon className="w-5 h-5 mr-2 text-emerald-500" />
          Work Done (Past 24h)
          <MessageSquare
            className={`ml-2 h-4 w-4 transition-transform ${
              expandedSections?.workDone ? "rotate-180" : ""
            }`}
          />
        </h3>

        {expandedSections?.workDone !== false && (
          <Accordion type="single" collapsible className="w-full">
            <div className="space-y-4">
              {member.workDone.map((item, _i) => (
                <WorkItemComponent
                  key={item.id}
                  item={item}
                  className="bg-gradient-to-r from-teal-10 to-emerald-50 border-teal-200"
                />
              ))}
            </div>
          </Accordion>
        )}
      </div>
      <div>
        <h3
          className="text-lg font-semibold text-blue-800 mb-3 flex items-center"
          onClick={() => toggleSection("plannedWork")}
        >
          <ClockIcon className="w-5 h-5 mr-2 text-blue-500" />
          Planned Work (Next 24h)
          <MessageSquare
            className={`ml-2 h-4 w-4 transition-transform ${
              expandedSections.plannedWork ? "rotate-180" : ""
            }`}
          />
        </h3>

        {expandedSections.plannedWork !== false && (
          <Accordion type="single" collapsible className="w-full">
            <div className="space-y-4">
              {member.plannedWork.map((item, i) => (
                <WorkItemComponent
                  key={i}
                  item={item}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200"
                />
              ))}
            </div>
          </Accordion>
        )}
      </div>
      <div>
        <h3
          className="text-lg font-semibold text-amber-800 mb-3 flex items-center"
          onClick={() => toggleSection("blockers")}
        >
          <ListTodoIcon className="w-5 h-5 mr-2 text-amber-500" />
          Backlog
          <MessageSquare
            className={`ml-2 h-4 w-4 transition-transform ${
              expandedSections.blockers ? "rotate-180" : ""
            }`}
          />
        </h3>

        {expandedSections.blockers !== false && (
          <Accordion type="single" collapsible className="w-full">
            <div className="space-y-4">
              {member.blockers.map((item, i) => (
                <WorkItemComponent
                  key={i}
                  item={item}
                  className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200"
                />
              ))}
            </div>
          </Accordion>
        )}
      </div>
    </div>
  );
}
