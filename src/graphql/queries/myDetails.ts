import { gql } from "@apollo/client";

export const GET_DETAILS = gql`
  query myDetails {
    viewer {
      avatarUrl
      bio
      login
      location
    }
  }
`;
