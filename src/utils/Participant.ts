import {
  WorkItemWithActivities,
  MemberWorkItem,
} from "@/components/workitem/WorkItem.type";
import { activityComparator } from "./activity-helper";

export class Participant {
  name: string;
  id: string;
  // role: string[];
  memberRole: string;
  private workDone: WorkItemWithActivities[];
  private plannedWork: WorkItemWithActivities[];
  private blockers: WorkItemWithActivities[];
  private backlog: WorkItemWithActivities[];

  constructor(
    id: string,
    name: string,
    memberRole: string
    // role: string[] = []
  ) {
    this.name = name;
    this.id = id;
    // this.role = role;
    this.memberRole = memberRole;
    this.workDone = [];
    this.plannedWork = [];
    this.blockers = [];
    this.backlog = [];
  }

  getParticipant(): MemberWorkItem {
    this.sortActivities();
    const participant = {
      avatar: "/placeholder.svg?height=40&width=40",
      name: this.name,
      id: this.id,
      memberRole: this.memberRole,
      // role: this.role,
      workDone: this.workDone,
      plannedWork: this.plannedWork,
      blockers: this.blockers,
      backlog: this.backlog,
    };

    return participant;
  }

  addBlocker(workItem: WorkItemWithActivities | WorkItemWithActivities[]) {
    const items = Array.isArray(workItem) ? workItem : [workItem];
    items.forEach((item) => {
      if (this.blockers.find((w) => w.id === item.id)) return;
      this.blockers.push(item);
    });
  }

  addWorkDone(workItem: WorkItemWithActivities | WorkItemWithActivities[]) {
    const items = Array.isArray(workItem) ? workItem : [workItem];
    items.forEach((item) => {
      if (this.workDone.find((w) => w.id === item.id)) return;
      this.workDone.push(item);
    });
  }

  addPlannedWork(workItem: WorkItemWithActivities | WorkItemWithActivities[]) {
    const items = Array.isArray(workItem) ? workItem : [workItem];
    items.forEach((item) => {
      if (this.plannedWork.find((w) => w.id === item.id)) return;
      this.plannedWork.push(item);
    });
  }

  addBacklog(workItem: WorkItemWithActivities | WorkItemWithActivities[]) {
    const items = Array.isArray(workItem) ? workItem : [workItem];
    items.forEach((item) => {
      if (this.backlog.find((w) => w.id === item.id)) return;
      this.backlog.push(item);
    });
  }

  sortActivities() {
    this.plannedWork.sort(activityComparator);
    this.workDone.sort(activityComparator);
    this.blockers.sort(activityComparator);
    this.backlog.sort(activityComparator);
  }
}
