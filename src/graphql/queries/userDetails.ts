import { gql } from "@apollo/client";

export const GET_USER_DETAILS = gql`
  query searchedUser($login: String!) {
    user(login: $login) {
      avatarUrl
      login
      name
      location
      createdAt
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories {
        totalCount
      }
    }
  }
`;

export const GET_USER_REPOS = gql`
  query searchedUserRepos(
    $login: String!
    $first: Int
    $orderBy: RepositoryOrder
    $languagesOrderBy: LanguageOrder
  ) {
    user(login: $login) {
      repositories(orderBy: $orderBy, first: $first) {
        nodes {
          id
          name
          stargazerCount
          forkCount
          isPrivate
          updatedAt
          url
          description

          languages(first: $first, orderBy: $languagesOrderBy) {
            nodes {
              id
              name
              color
            }
          }
          repositoryTopics(first: $first) {
            nodes {
              topic {
                name
              }
            }
          }
        }
      }
    }
  }
`;
