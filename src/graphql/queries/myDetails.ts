import { gql } from "@apollo/client";

export const GET_VIEWER_DETAILS = gql`
  query viewerDetails($privacy: RepositoryPrivacy) {
    viewer {
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
      repositories(privacy: $privacy) {
        totalCount
      }
    }
  }
`;

export const GET_VIEWER_REPOS = gql`
  query userRepos(
    $first: Int
    $orderBy: RepositoryOrder
    $languagesOrderBy: LanguageOrder
    $privacy: RepositoryPrivacy
  ) {
    viewer {
      repositories(first: $first, orderBy: $orderBy, privacy: $privacy) {
        totalCount
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
