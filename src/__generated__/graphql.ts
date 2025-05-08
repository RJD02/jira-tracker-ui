import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
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
  deleteJiraUser?: Maybe<MutationResponse>;
  deleteProject?: Maybe<MutationResponse>;
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
  project_key: Scalars['String']['input'];
  site_id: Scalars['Int']['input'];
  token: Scalars['String']['input'];
};


export type MutationCreateSiteUrlArgs = {
  site_url: Scalars['String']['input'];
};


export type MutationDeleteJiraUserArgs = {
  jira_id: Scalars['String']['input'];
};


export type MutationDeleteProjectArgs = {
  label: Scalars['String']['input'];
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
  project_key: Scalars['String']['output'];
  site_id: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

export type ProjectItem = {
  __typename?: 'ProjectItem';
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ProjectResponse = {
  __typename?: 'ProjectResponse';
  JiraUserResponse: Array<Maybe<JiraUserResponse>>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
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
  forced?: InputMaybe<Scalars['Boolean']['input']>;
  project: Scalars['String']['input'];
};


export type QueryJiraprojectsArgs = {
  baseurl: Scalars['String']['input'];
  token: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type QueryMembersArgs = {
  project: Scalars['String']['input'];
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


export type ProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'ProjectItem', id: string, label: string }> };

export type AllProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjectsQuery = { __typename?: 'Query', allProjects: Array<{ __typename?: 'ProjectResponse', id: string, label: string }> };

export type LoginMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'AuthUser', id: number, username: string } } | null };

export type JiraIssuesQueryVariables = Exact<{
  project: Scalars['String']['input'];
  forced?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type JiraIssuesQuery = { __typename?: 'Query', members: Array<{ __typename?: 'TeamMember', name: string, id: string, role: string }>, allProjects: Array<{ __typename?: 'ProjectResponse', id: string, label: string }>, issues?: { __typename?: 'JiraResponse', total: number, issues: Array<{ __typename?: 'Issue', id: string, key: string, url: string, fields: { __typename?: 'IssueFields', created: string, description?: string | null, duedate?: string | null, labels: Array<string>, summary: string, updated: string, assignee?: { __typename?: 'User', displayName: string, accountId: string } | null, issuetype: { __typename?: 'IssueType', description: string, id: string, name: string }, comment: { __typename?: 'CommentSection', comments: Array<{ __typename?: 'Comment', updated: string, id: string, body: string, created: string, author: { __typename?: 'User', displayName: string, accountId: string } }> }, worklog: { __typename?: 'Worklog', worklogs: Array<{ __typename?: 'WorklogEntry', id: string, created: string, timeSpent: string, timeSpentSeconds: number, author: { __typename?: 'User', accountId: string, displayName: string } }> }, priority: { __typename?: 'Priority', id: string, name: string }, status: { __typename?: 'Status', id: string, name: string, statusCategory: { __typename?: 'StatusCategory', name: string, id: number } }, parent?: { __typename?: 'ParentIssue', id: string, key: string, fields: { __typename?: 'ParentIssueFields', summary: string, status: { __typename?: 'Status', id: string, name: string }, issuetype: { __typename?: 'IssueType', name: string, id: string, description: string } } } | null } }> } | null };


export const ProjectsDocument = gql`
    query Projects {
  projects {
    id
    label
  }
}
    `;

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
      }
export function useProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
        }
export function useProjectsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
        }
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<typeof useProjectsLazyQuery>;
export type ProjectsSuspenseQueryHookResult = ReturnType<typeof useProjectsSuspenseQuery>;
export type ProjectsQueryResult = Apollo.QueryResult<ProjectsQuery, ProjectsQueryVariables>;
export const AllProjectsDocument = gql`
    query AllProjects {
  allProjects {
    id
    label
  }
}
    `;

/**
 * __useAllProjectsQuery__
 *
 * To run a query within a React component, call `useAllProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProjectsQuery(baseOptions?: Apollo.QueryHookOptions<AllProjectsQuery, AllProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllProjectsQuery, AllProjectsQueryVariables>(AllProjectsDocument, options);
      }
export function useAllProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProjectsQuery, AllProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllProjectsQuery, AllProjectsQueryVariables>(AllProjectsDocument, options);
        }
export function useAllProjectsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AllProjectsQuery, AllProjectsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllProjectsQuery, AllProjectsQueryVariables>(AllProjectsDocument, options);
        }
export type AllProjectsQueryHookResult = ReturnType<typeof useAllProjectsQuery>;
export type AllProjectsLazyQueryHookResult = ReturnType<typeof useAllProjectsLazyQuery>;
export type AllProjectsSuspenseQueryHookResult = ReturnType<typeof useAllProjectsSuspenseQuery>;
export type AllProjectsQueryResult = Apollo.QueryResult<AllProjectsQuery, AllProjectsQueryVariables>;
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      id
      username
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const JiraIssuesDocument = gql`
    query JiraIssues($project: String!, $forced: Boolean) {
  members(project: $project) {
    name
    id
    role
  }
  allProjects {
    id
    label
  }
  issues(project: $project, forced: $forced) {
    total
    issues {
      id
      key
      url
      fields {
        assignee {
          displayName
          accountId
        }
        issuetype {
          description
          id
          name
        }
        comment {
          comments {
            updated
            id
            body
            author {
              displayName
              accountId
            }
            created
          }
        }
        created
        description
        duedate
        labels
        worklog {
          worklogs {
            id
            created
            author {
              accountId
              displayName
            }
            timeSpent
            timeSpentSeconds
          }
        }
        priority {
          id
          name
        }
        status {
          id
          name
          statusCategory {
            name
            id
          }
        }
        summary
        parent {
          id
          fields {
            summary
            status {
              id
              name
            }
            issuetype {
              name
              id
              description
            }
          }
          key
        }
        updated
      }
    }
  }
}
    `;

/**
 * __useJiraIssuesQuery__
 *
 * To run a query within a React component, call `useJiraIssuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useJiraIssuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJiraIssuesQuery({
 *   variables: {
 *      project: // value for 'project'
 *      forced: // value for 'forced'
 *   },
 * });
 */
export function useJiraIssuesQuery(baseOptions: Apollo.QueryHookOptions<JiraIssuesQuery, JiraIssuesQueryVariables> & ({ variables: JiraIssuesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<JiraIssuesQuery, JiraIssuesQueryVariables>(JiraIssuesDocument, options);
      }
export function useJiraIssuesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JiraIssuesQuery, JiraIssuesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<JiraIssuesQuery, JiraIssuesQueryVariables>(JiraIssuesDocument, options);
        }
export function useJiraIssuesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<JiraIssuesQuery, JiraIssuesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<JiraIssuesQuery, JiraIssuesQueryVariables>(JiraIssuesDocument, options);
        }
export type JiraIssuesQueryHookResult = ReturnType<typeof useJiraIssuesQuery>;
export type JiraIssuesLazyQueryHookResult = ReturnType<typeof useJiraIssuesLazyQuery>;
export type JiraIssuesSuspenseQueryHookResult = ReturnType<typeof useJiraIssuesSuspenseQuery>;
export type JiraIssuesQueryResult = Apollo.QueryResult<JiraIssuesQuery, JiraIssuesQueryVariables>;