/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query Projects {\n    projects {\n      id\n      label\n    }\n  }\n": types.ProjectsDocument,
    "\n query AllProjects {\n    allProjects {\n    id\n    label\n  }\n}\n": types.AllProjectsDocument,
    "mutation Login($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    token\n    user {\n      id\n      username\n    }\n  }\n}": types.LoginDocument,
    "\n  query JiraIssues($project: String!, $forced: Boolean) {\n    members(project: $project) {\n      name\n      id\n      role\n    }\n    allProjects {\n      id\n      label\n    }\n    issues(project: $project, forced: $forced) {\n      total\n      issues {\n        id\n        key\n        url\n        fields {\n          assignee {\n            displayName\n            accountId\n          }\n          issuetype {\n            description\n            id\n            name\n          }\n          comment {\n            comments {\n              updated\n              id\n              body\n              author {\n                displayName\n                accountId\n              }\n              created\n            }\n          }\n          created\n          description\n          duedate\n          labels\n          worklog {\n            worklogs {\n              id\n              created\n              author {\n                accountId\n                displayName\n              }\n              timeSpent\n              timeSpentSeconds\n            }\n          }\n          priority {\n            id\n            name\n          }\n          status {\n            id\n            name\n            statusCategory {\n              name\n              id\n            }\n          }\n          summary\n          parent {\n            id\n            fields {\n              summary\n              status {\n                id\n                name\n              }\n              issuetype {\n                name\n                id\n                description\n              }\n            }\n            key\n          }\n          updated\n        }\n      }\n    }\n  }\n": types.JiraIssuesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Projects {\n    projects {\n      id\n      label\n    }\n  }\n"): (typeof documents)["\n  query Projects {\n    projects {\n      id\n      label\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n query AllProjects {\n    allProjects {\n    id\n    label\n  }\n}\n"): (typeof documents)["\n query AllProjects {\n    allProjects {\n    id\n    label\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation Login($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    token\n    user {\n      id\n      username\n    }\n  }\n}"): (typeof documents)["mutation Login($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    token\n    user {\n      id\n      username\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query JiraIssues($project: String!, $forced: Boolean) {\n    members(project: $project) {\n      name\n      id\n      role\n    }\n    allProjects {\n      id\n      label\n    }\n    issues(project: $project, forced: $forced) {\n      total\n      issues {\n        id\n        key\n        url\n        fields {\n          assignee {\n            displayName\n            accountId\n          }\n          issuetype {\n            description\n            id\n            name\n          }\n          comment {\n            comments {\n              updated\n              id\n              body\n              author {\n                displayName\n                accountId\n              }\n              created\n            }\n          }\n          created\n          description\n          duedate\n          labels\n          worklog {\n            worklogs {\n              id\n              created\n              author {\n                accountId\n                displayName\n              }\n              timeSpent\n              timeSpentSeconds\n            }\n          }\n          priority {\n            id\n            name\n          }\n          status {\n            id\n            name\n            statusCategory {\n              name\n              id\n            }\n          }\n          summary\n          parent {\n            id\n            fields {\n              summary\n              status {\n                id\n                name\n              }\n              issuetype {\n                name\n                id\n                description\n              }\n            }\n            key\n          }\n          updated\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query JiraIssues($project: String!, $forced: Boolean) {\n    members(project: $project) {\n      name\n      id\n      role\n    }\n    allProjects {\n      id\n      label\n    }\n    issues(project: $project, forced: $forced) {\n      total\n      issues {\n        id\n        key\n        url\n        fields {\n          assignee {\n            displayName\n            accountId\n          }\n          issuetype {\n            description\n            id\n            name\n          }\n          comment {\n            comments {\n              updated\n              id\n              body\n              author {\n                displayName\n                accountId\n              }\n              created\n            }\n          }\n          created\n          description\n          duedate\n          labels\n          worklog {\n            worklogs {\n              id\n              created\n              author {\n                accountId\n                displayName\n              }\n              timeSpent\n              timeSpentSeconds\n            }\n          }\n          priority {\n            id\n            name\n          }\n          status {\n            id\n            name\n            statusCategory {\n              name\n              id\n            }\n          }\n          summary\n          parent {\n            id\n            fields {\n              summary\n              status {\n                id\n                name\n              }\n              issuetype {\n                name\n                id\n                description\n              }\n            }\n            key\n          }\n          updated\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;