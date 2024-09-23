import { JiraCredential } from "../../shared/types/types";
export { starTeam } from "./star-team";

export const BASE_URL = "https://starhealthinsurance.atlassian.net";
export const BOARD = "Data Lake";

export const starCredentials: JiraCredential = {
    protocol: "https",
    host: "starhealthinsurance.atlassian.net",
    username: "v.pratikshamete@starhealth.in",
    password:
        "ATATT3xFfGF0Szr9hJoONOAQHZa0_cOYNXyMlRRRZs0KOAMno0ekVsVXQ7GzsU_KdPxgTVuPAxS0Sio_XmXpvGe5JWYBQ2-VzvtaHNpVxBitB99_KvJXjKC27lM4ruhLn9-tU2eRJStmE1R54iBqSRVgfXqJDJQkGrWT3_SUdc5wiIc39R2c5yU=27483220",
    apiVersion: "2",
    strictSSL: true,
};

