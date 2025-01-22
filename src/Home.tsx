import { useEffect, useState } from "react";
import { Accordion } from "./components/ui/Accordion";
import {
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  ListTodoIcon,
  MessageSquare,
} from "lucide-react";
import { MemberWorkItem } from "./components/workitem/WorkItem.type";
import { WorkItemComponent } from "./components/workitem/WorkItems";
import { ParticipantCard } from "./components/ParticipantCard";
import { getParticipantStats } from "./utils/stat-util";

interface MemberListProps {
  projectLabel: string;
  members: MemberWorkItem[];
}

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

  const allParticipants = props.members.map((member) => ({
    ...member,
    stats: getParticipantStats(member),
  }));
  // only take those participants whose stats are not all 0
  const participants = allParticipants.filter(
    (participant) =>
      participant.stats.hoursLogged !== 0 ||
      participant.stats.closed !== 0 ||
      participant.stats.planned !== 0 ||
      participant.stats.participated !== 0
  );
  const indexOfLastParticipant = currentPage * participantsPerPage;
  const indexOfFirstParticipant = indexOfLastParticipant - participantsPerPage;
  const currentParticipants = participants
    .sort((a, b) => {
      // Check if either name is "project" and prioritize it
      const aName = a.name.toLowerCase();
      const bName = b.name.toLowerCase();
      if (aName === "project" && bName !== "project") return -1;
      if (bName === "project" && aName !== "project") return 1;

      const diff = b.stats.hoursLogged - a.stats.hoursLogged;
      if (diff === 0)
        return b.memberRole == a.memberRole
          ? 0
          : b.memberRole > a.memberRole
          ? -1
          : 1;
      return diff;
    })
    .slice(indexOfFirstParticipant, indexOfLastParticipant);

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
            {props.projectLabel}
          </span>
          Team Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
          {currentParticipants.map((participant, index) => (
            <ParticipantCard
              key={participant.id}
              participantIndex={index + indexOfFirstParticipant}
              activeParticipant={activeParticipant}
              setActiveParticipant={setActiveParticipant}
              participant={participant}
            />
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
            <div className="space-y-4 mb-5">
              {member.backlog.map((item, i) => (
                <WorkItemComponent
                  key={i}
                  item={item}
                  className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200"
                />
              ))}
            </div>
            <div className="space-y-4">
              {member.blockers.map((item, i) => (
                <WorkItemComponent
                  key={i}
                  item={item}
                  className="bg-gradient-to-r from-red-50 to-red-300 border-amber-200"
                />
              ))}
            </div>
          </Accordion>
        )}
      </div>
    </div>
  );
}
