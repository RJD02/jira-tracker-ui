import { JiraCredential } from "../shared/types/types";
import * as starConfig from "../config/star/star-config";
import * as salamConfig from "../config/salam/salam-config";

import { TeamMember } from "@/shared/team";

interface Config {
    baseurl: string;
    board?: string;
    credential: JiraCredential;
    team: TeamMember[];
}
export type PROJECT = "STAR" | "SALAM";

export function getConfig(project: PROJECT): Config {
    switch (project) {
        case "STAR":
            return {
                baseurl: starConfig.BASE_URL,
                board: starConfig.BOARD,
                credential: starConfig.starCredentials,
                team: starConfig.starTeam,
            };
        case "SALAM":
            return {
                baseurl: salamConfig.BASE_URL,
                credential: salamConfig.salamCredentials,
                team: salamConfig.salamTeam,
            };
    }

    throw new Error("Invalid project");
}

