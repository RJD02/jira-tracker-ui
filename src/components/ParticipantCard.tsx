import { CheckSquareIcon, ClockIcon, ListTodoIcon } from "lucide-react";
import { MemberWorkItem } from "./workitem/WorkItem.type";
import { Stats } from "../utils/stat-util";

interface ParticipantCardProps {
  participantIndex: number;
  activeParticipant: number;
  setActiveParticipant: (index: number) => void;
  participant: MemberWithStats;
}

export function ParticipantCard({
  participant,
  participantIndex,
  activeParticipant,
  setActiveParticipant,
}: ParticipantCardProps) {
  return (
    <button
      className={`p-4 rounded-lg text-left transition-colors ${
        participantIndex === activeParticipant
          ? "bg-gradient-to-br from-teal-100 to-blue-100 border-2 border-teal-300"
          : "bg-white hover:bg-gray-50 border border-gray-200"
      }`}
      onClick={() => setActiveParticipant(participantIndex)}
    >
      <div className="flex justify-between align-start">
        <div className="font-medium text-2xl mb-2 text-gray-800 capitalize">
          {participant.name.split(" ")[0]}
        </div>
        <div className="flex items-center text-blue-600">
          <ClockIcon className="w-4 h-4 mr-1" />
          <span>{participant.stats.hoursLogged} hrs</span>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center text-green-600">
          <CheckSquareIcon className="w-4 h-4 mr-1" />
          <span>{participant.stats.closed}</span>
        </div>

        <div className="flex items-center text-blue-600">
          <ListTodoIcon className="w-5 h-5 mr-1 text-amber-500" />
          <span>
            {participant.stats.planned} |{" "}
            <span className="text-amber-600">
              {participant.blockers.length}
            </span>
          </span>
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-600">
        {participant.stats.participated} tasks participated
      </div>
    </button>
  );
}

type MemberWithStats = MemberWorkItem & { stats: Stats };
