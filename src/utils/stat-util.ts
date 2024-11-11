import { MemberWorkItem } from "../components/workitem/WorkItem.type";
import { getLastNBusinessDays } from "../lib/utils";

export function getParticipantStats(member: MemberWorkItem): Stats {
  const hoursLogged =
    [...member.workDone, ...member.plannedWork, ...member.blockers].reduce(
      (acc, item) => {
        return (
          acc +
          item.hoursLogged
            ?.filter((log) => new Date(log.createdAt) > getLastNBusinessDays(1))
            .filter(
              (log) => log.author.id == member.id || member.id == "project"
            )
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

export interface Stats {
  participated: number;
  closed: number;
  planned: number;
  blocked: number;
  hoursLogged: number;
}
