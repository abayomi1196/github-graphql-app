import { gql } from "@apollo/client";

export const GET_VIEWER_DETAILS = gql`
  query viewerDetails(
    $first: Int
    $orderBy: RepositoryOrder
    $languagesOrderBy: LanguageOrder
  ) {
    viewer {
      avatarUrl
      login
      name
      bio
      location
      websiteUrl
      repositories(first: $first, orderBy: $orderBy) {
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
