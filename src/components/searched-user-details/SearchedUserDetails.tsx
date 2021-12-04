import { useContext } from "react";
import { useQuery } from "@apollo/client";

import styles from "../viewer-details/ViewerDetails.module.css";

import Profile from "components/profile/Profile";
import { GET_USER_DETAILS, GET_USER_REPOS } from "graphql/queries/userDetails";
import {
  ViewerDetails,
  UserDetailsVars,
  UserReposVars,
  ViewerRepos,
} from "types";
import { NameContext } from "context/NameContext";
import { OptionsContext } from "context/OptionsContext";
import Repos from "components/repos/Repos";

function SearchedUser() {
  const { searchTerm } = useContext(NameContext);
  const { option } = useContext(OptionsContext);

  // profile details
  const {
    data: details,
    loading: detailsLoading,
    error: detailsError,
  } = useQuery<ViewerDetails, UserDetailsVars>(GET_USER_DETAILS, {
    variables: {
      login: searchTerm,
    },
  });

  // repo details
  const {
    data: repos,
    loading: reposLoading,
    error: reposError,
  } = useQuery<ViewerRepos, UserReposVars>(GET_USER_REPOS, {
    variables: {
      login: searchTerm,
      first: 5,
      orderBy: {
        field: option.value,
        direction: "DESC",
      },
      languagesOrderBy: {
        direction: "DESC",
        field: "SIZE",
      },
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.viewerWrapper}>
        <Profile
          data={details}
          loading={detailsLoading}
          error={detailsError}
          type='user'
        />
        <Repos
          data={repos}
          loading={reposLoading}
          error={reposError}
          type='user'
        />
      </div>
    </div>
  );
}

export default SearchedUser;
