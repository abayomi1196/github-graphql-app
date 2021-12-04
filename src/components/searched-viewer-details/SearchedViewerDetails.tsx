import { useContext } from "react";
import { useQuery } from "@apollo/client";

import styles from "../viewer-details/ViewerDetails.module.css";

import Profile from "components/profile/Profile";
import { GET_USER_DETAILS } from "graphql/queries/userDetails";
import { ViewerDetails, UserDetailsVars } from "types";
import { NameContext } from "context/NameContext";

function SearchedViewerDetails() {
  const { searchTerm } = useContext(NameContext);

  const {
    data: details,
    loading: detailsLoading,
    error: detailsError,
  } = useQuery<ViewerDetails, UserDetailsVars>(GET_USER_DETAILS, {
    variables: {
      login: searchTerm,
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
      </div>
    </div>
  );
}

export default SearchedViewerDetails;
