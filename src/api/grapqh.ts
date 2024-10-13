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
export const GET_JIRA_ITEMS = gql(/* GraphQL */ `
  query JiraIssues($project: PROJECT!) {
    members(project: $project) {
      name
      id
      role
    }
    projects {
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
