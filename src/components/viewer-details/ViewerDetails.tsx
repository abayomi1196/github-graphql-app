import { useState } from "react";
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

import Profile from "./profile/Profile";
import Repos from "./repos/Repos";

import styles from "./ViewerDetails.module.css";
function ViewerDetailsWrapper() {
  const {
    data: details,
    loading: detailsLoading,
    error: detailsError,
  } = useQuery<ViewerDetails, ViewerDetailsVars>(GET_VIEWER_DETAILS, {
    variables: {
      privacy: "PUBLIC",
    },
  });

  const options = [
    { label: "stars", value: "STARGAZERS" },
    { label: "last updated", value: "UPDATED_AT" },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const {
    data: repos,
    loading: reposLoading,
    error: reposError,
  } = useQuery<ViewerRepos, ViewerReposVars>(GET_VIEWER_REPOS, {
    variables: {
      first: 5,
      orderBy: {
        field: selectedOption.value,
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
        <Profile data={details} loading={detailsLoading} error={detailsError} />
        <Repos
          data={repos}
          loading={reposLoading}
          error={reposError}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
        />
      </div>
    </div>
  );
}

export default ViewerDetailsWrapper;
