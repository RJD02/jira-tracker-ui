import { Activities } from "../../utils/activity-helper";

// Mock data structure to simulate Jira tickets
export interface User {
    id: string;
    displayName: string;
}
interface BaseWorkItem {
    id: string;
    key: string;
    title: string;
    issuetype: { id: string; name: string };
}
export interface WorkItem extends BaseWorkItem {
    url: string;
    storyKey: string;
    priority: { id: string; name: string };
    parent: BaseWorkItem;
    lastUpdated: string;
    assignee: User;
    labels: string[];

    // title: string;
    // lastUpdated: string;
    description: string;
    hoursLogged: {
        author: User;
        timeSpent: string;
        timeSpentSeconds: number;
        createdAt: string;
    }[];
    status: string;
    statusCategory: string;
    // assignee: string;
    // assigneeId: string;
    comments: { author: User; content: string; createdAt: string }[];
}

export type WorkItemWithActivities = WorkItem & Activities;
export interface MemberWorkItem {
    name: string;
    id: string;
    // assigneeId: string;
    avatar: string;
    role: string[];
    workDone: WorkItemWithActivities[];
    plannedWork: WorkItemWithActivities[];
    blockers: WorkItemWithActivities[];
}

