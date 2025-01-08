import { gql } from "../__generated__/gql";

export const GET_PROJECTS = gql(
  `
  query Projects {
    projects {
      id
      label
    }
  }
`
);

export const GET_ALL_PROJECTS = gql(`
  query AllProjects {
     allProjects {
     id
     label
   }
 }
 `);

export const CREATE_PROJECT_MUTATION = gql(`
  mutation Mutation($createProject2Id: String!, $siteId: Int!, $label: String!, $projectKey: String!, $baseurl: String!, $email: String!, $token: String!) {
  createProject2(id: $createProject2Id, site_id: $siteId, label: $label, project_key: $projectKey, baseurl: $baseurl, email: $email, token: $token) {
    email
    id
    label
    project_key
    site_id
    token
  }
}
  `);

export const CREATE_SITEURL_MUTATION = gql(`
   mutation CreateSiteUrl($siteUrl: String!) {
  createSiteUrl(site_url: $siteUrl) {
    site_id
    site_url
  }
}
  `);

export const GET_PROJECTS_FROM_CREDS = gql(`
query GetProjectsWithCreds(
    $baseurl: String!
    $token: String!
    $username: String!
) {
    jiraprojects(baseurl: $baseurl, token: $token, username: $username) {
        id
        name
        key
    }
}
`);

export const LOGIN_MUTATION =
  gql(`mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      id
      username
    }
  }
}`);

export const GET_JIRA_ITEMS = gql(/* GraphQL */ `
  query JiraIssues($project: String!) {
    members(project: $project) {
      name
      id
      role
    }
    allProjects {
      id
      label
    }
    issues(project: $project) {
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
`);
