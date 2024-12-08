/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String']['output'];
  user: AuthUser;
};

export type AuthUser = {
  __typename?: 'AuthUser';
  id: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

export type AvatarUrls = {
  __typename?: 'AvatarUrls';
  size16x16: Scalars['String']['output'];
  size24x24: Scalars['String']['output'];
  size32x32: Scalars['String']['output'];
  size48x48: Scalars['String']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  body: Scalars['String']['output'];
  created: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  jsdPublic: Scalars['Boolean']['output'];
  self: Scalars['String']['output'];
  updateAuthor: User;
  updated: Scalars['String']['output'];
};

export type CommentSection = {
  __typename?: 'CommentSection';
  comments: Array<Comment>;
  maxResults: Scalars['Int']['output'];
  self: Scalars['String']['output'];
  startAt: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Issue = {
  __typename?: 'Issue';
  expand: Scalars['String']['output'];
  fields: IssueFields;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  self: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type IssueFields = {
  __typename?: 'IssueFields';
  assignee?: Maybe<User>;
  comment: CommentSection;
  created: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  duedate?: Maybe<Scalars['String']['output']>;
  issuetype: IssueType;
  labels: Array<Scalars['String']['output']>;
  parent?: Maybe<ParentIssue>;
  priority: Priority;
  reporter: User;
  status: Status;
  summary: Scalars['String']['output'];
  updated: Scalars['String']['output'];
  worklog: Worklog;
};

export type IssueType = {
  __typename?: 'IssueType';
  description: Scalars['String']['output'];
  hierarchyLevel: Scalars['Int']['output'];
  iconUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  self: Scalars['String']['output'];
  subtask: Scalars['Boolean']['output'];
};

export type JiraCredential = {
  __typename?: 'JiraCredential';
  apiVersion: Scalars['String']['output'];
  host: Scalars['String']['output'];
  password: Scalars['String']['output'];
  protocol: Scalars['String']['output'];
  strictSSL: Scalars['Boolean']['output'];
  username: Scalars['String']['output'];
};

export type JiraProject = {
  __typename?: 'JiraProject';
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type JiraResponse = {
  __typename?: 'JiraResponse';
  expand: Scalars['String']['output'];
  issues: Array<Issue>;
  maxResults: Scalars['Int']['output'];
  startAt: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type JiraUser = {
  __typename?: 'JiraUser';
  id: Scalars['Int']['output'];
  jira_id: Scalars['String']['output'];
  projects: Array<Project2>;
  role: Scalars['String']['output'];
  user_name: Scalars['String']['output'];
};

export type JiraUserResponse = {
  __typename?: 'JiraUserResponse';
  id: Scalars['Int']['output'];
  jira_id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProject2: Project2;
  createSiteUrl: SiteUrlTable;
  jiraUserData: MutationResponse;
  login?: Maybe<AuthPayload>;
  signup?: Maybe<AuthPayload>;
};


export type MutationCreateProject2Args = {
  baseurl: Scalars['String']['input'];
  board?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  label: Scalars['String']['input'];
  site_id: Scalars['Int']['input'];
  token: Scalars['String']['input'];
};


export type MutationCreateSiteUrlArgs = {
  site_url: Scalars['String']['input'];
};


export type MutationJiraUserDataArgs = {
  jiraData: Array<TeamInput>;
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  message: Scalars['String']['output'];
  status: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
};

export enum Project {
  CustomerSuccess = 'CUSTOMER_SUCCESS',
  Salam = 'SALAM',
  Star = 'STAR',
  Vda = 'VDA'
}

export type ParentIssue = {
  __typename?: 'ParentIssue';
  fields: ParentIssueFields;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  self: Scalars['String']['output'];
};

export type ParentIssueFields = {
  __typename?: 'ParentIssueFields';
  issuetype: IssueType;
  priority: Priority;
  status: Status;
  summary: Scalars['String']['output'];
};

export type Priority = {
  __typename?: 'Priority';
  iconUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  self: Scalars['String']['output'];
};

export type Project2 = {
  __typename?: 'Project2';
  baseurl: SiteUrlTable;
  board?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  jiraUsers: Array<JiraUser>;
  label: Scalars['String']['output'];
  site_id: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

export type ProjectItem = {
  __typename?: 'ProjectItem';
  id: Project;
  label: Scalars['String']['output'];
};

export type ProjectResponse = {
  __typename?: 'ProjectResponse';
  JiraUserResponse: Array<Maybe<JiraUserResponse>>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  allProjects: Array<ProjectResponse>;
  getUsers?: Maybe<Array<Maybe<UserList>>>;
  issues?: Maybe<JiraResponse>;
  jiraprojects?: Maybe<Array<Maybe<JiraProject>>>;
  me?: Maybe<AuthUser>;
  members: Array<TeamMember>;
  projects: Array<ProjectItem>;
  usersForProject: Array<Maybe<JiraUserResponse>>;
};


export type QueryGetUsersArgs = {
  baseurl: Scalars['String']['input'];
  token: Scalars['String']['input'];
  userKey: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type QueryIssuesArgs = {
  project: Project;
};


export type QueryJiraprojectsArgs = {
  baseurl: Scalars['String']['input'];
  token: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type QueryMembersArgs = {
  project: Project;
};


export type QueryUsersForProjectArgs = {
  projectId: Scalars['String']['input'];
};

export type SiteUrlTable = {
  __typename?: 'SiteUrlTable';
  projects: Array<Project2>;
  site_id: Scalars['Int']['output'];
  site_url: Scalars['String']['output'];
};

export type Status = {
  __typename?: 'Status';
  description: Scalars['String']['output'];
  iconUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  self: Scalars['String']['output'];
  statusCategory: StatusCategory;
};

export type StatusCategory = {
  __typename?: 'StatusCategory';
  colorName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  self: Scalars['String']['output'];
};

export type TeamInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  role: Scalars['String']['input'];
};

export type TeamMember = {
  __typename?: 'TeamMember';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  accountId: Scalars['String']['output'];
  accountType: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
  avatarUrls: AvatarUrls;
  displayName: Scalars['String']['output'];
  emailAddress?: Maybe<Scalars['String']['output']>;
  self: Scalars['String']['output'];
  timeZone: Scalars['String']['output'];
};

export type UserList = {
  __typename?: 'UserList';
  account_id?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  emailAddress?: Maybe<Scalars['String']['output']>;
};

export type Worklog = {
  __typename?: 'Worklog';
  maxResults: Scalars['Int']['output'];
  startAt: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  worklogs: Array<WorklogEntry>;
};

export type WorklogEntry = {
  __typename?: 'WorklogEntry';
  author: User;
  created: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  self: Scalars['String']['output'];
  started: Scalars['String']['output'];
  timeSpent: Scalars['String']['output'];
  timeSpentSeconds: Scalars['Int']['output'];
  updateAuthor: User;
  updated: Scalars['String']['output'];
};

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'ProjectItem', id: Project, label: string }> };

export type GetProjectsWithCredsQueryVariables = Exact<{
  baseurl: Scalars['String']['input'];
  token: Scalars['String']['input'];
  username: Scalars['String']['input'];
}>;


export type GetProjectsWithCredsQuery = { __typename?: 'Query', jiraprojects?: Array<{ __typename?: 'JiraProject', id?: string | null, name?: string | null, key?: string | null } | null> | null };

export type LoginMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'AuthUser', id: number, username: string } } | null };

export type JiraIssuesQueryVariables = Exact<{
  project: Project;
}>;


export type JiraIssuesQuery = { __typename?: 'Query', members: Array<{ __typename?: 'TeamMember', name: string, id: string, role: string }>, projects: Array<{ __typename?: 'ProjectItem', id: Project, label: string }>, issues?: { __typename?: 'JiraResponse', total: number, issues: Array<{ __typename?: 'Issue', id: string, key: string, url: string, fields: { __typename?: 'IssueFields', created: string, description?: string | null, duedate?: string | null, labels: Array<string>, summary: string, updated: string, assignee?: { __typename?: 'User', displayName: string, accountId: string } | null, issuetype: { __typename?: 'IssueType', description: string, id: string, name: string }, comment: { __typename?: 'CommentSection', comments: Array<{ __typename?: 'Comment', updated: string, id: string, body: string, created: string, author: { __typename?: 'User', displayName: string, accountId: string } }> }, worklog: { __typename?: 'Worklog', worklogs: Array<{ __typename?: 'WorklogEntry', id: string, created: string, timeSpent: string, timeSpentSeconds: number, author: { __typename?: 'User', accountId: string, displayName: string } }> }, priority: { __typename?: 'Priority', id: string, name: string }, status: { __typename?: 'Status', id: string, name: string, statusCategory: { __typename?: 'StatusCategory', name: string, id: number } }, parent?: { __typename?: 'ParentIssue', id: string, key: string, fields: { __typename?: 'ParentIssueFields', summary: string, status: { __typename?: 'Status', id: string, name: string }, issuetype: { __typename?: 'IssueType', name: string, id: string, description: string } } } | null } }> } | null };


export const ProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]} as unknown as DocumentNode<ProjectsQuery, ProjectsQueryVariables>;
export const GetProjectsWithCredsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectsWithCreds"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"baseurl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jiraprojects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"baseurl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"baseurl"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<GetProjectsWithCredsQuery, GetProjectsWithCredsQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const JiraIssuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"JiraIssues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"project"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PROJECT"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"members"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"project"},"value":{"kind":"Variable","name":{"kind":"Name","value":"project"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issues"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"project"},"value":{"kind":"Variable","name":{"kind":"Name","value":"project"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"issues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"accountId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issuetype"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"accountId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"duedate"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}},{"kind":"Field","name":{"kind":"Name","value":"worklog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"worklogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountId"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timeSpent"}},{"kind":"Field","name":{"kind":"Name","value":"timeSpentSeconds"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"priority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"statusCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issuetype"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]}}]}}]} as unknown as DocumentNode<JiraIssuesQuery, JiraIssuesQueryVariables>;