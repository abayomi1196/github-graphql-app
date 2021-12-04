import { useContext } from "react";
import { useQuery } from "@apollo/client";

import {
  GET_VIEWER_DETAILS,
  GET_VIEWER_REPOS,
} from "graphql/queries/myDetails";

import {
  ViewerDetails,
  ViewerDetailsVars,
  ViewerRepos,
  ViewerReposVars,
} from "types";

import Profile from "../profile/Profile";
import Repos from "../repos/Repos";

import { OptionsContext } from "context/OptionsContext";

import styles from "./ViewerDetails.module.css";
function ViewerDetailsWrapper() {
  const { option } = useContext(OptionsContext);

  // my profile details
  const {
    data: details,
    loading: detailsLoading,
    error: detailsError,
  } = useQuery<ViewerDetails, ViewerDetailsVars>(GET_VIEWER_DETAILS, {
    variables: {
      privacy: "PUBLIC",
    },
  });

  // my repo details
  const {
    data: repos,
    loading: reposLoading,
    error: reposError,
  } = useQuery<ViewerRepos, ViewerReposVars>(GET_VIEWER_REPOS, {
    variables: {
      first: 5,
      orderBy: {
        field: option.value,
        direction: "DESC",
      },
      languagesOrderBy: {
        direction: "DESC",
        field: "SIZE",
      },
      privacy: "PUBLIC",
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.viewerWrapper}>
        <Profile
          data={details}
          loading={detailsLoading}
          error={detailsError}
          type='viewer'
        />
        <Repos
          data={repos}
          loading={reposLoading}
          error={reposError}
          type='viewer'
        />
      </div>
    </div>
  );
}

export default ViewerDetailsWrapper;
