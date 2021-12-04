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
