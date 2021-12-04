import { useQuery } from "@apollo/client";
import Loader from "react-loader-spinner";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";

import { GET_VIEWER_DETAILS } from "graphql/queries/myDetails";

import { ViewerDetails, ViewerDetailsVars } from "types";

import styles from "./Profile.module.css";

function Profile() {
  const {
    data: details,
    loading: detailsLoading,
    error: detailsError,
  } = useQuery<ViewerDetails, ViewerDetailsVars>(GET_VIEWER_DETAILS, {
    variables: {
      privacy: "PUBLIC",
    },
  });

  return (
    <>
      {detailsLoading && (
        <p className={styles.loadingContainer}>
          <Loader
            type='Bars'
            color='rgba(0, 118, 255, 0.2)'
            width={"30px"}
            height={"30px"}
          />
        </p>
      )}
      {detailsError && <p className={styles.errorContainer}>error...</p>}
      <div className={styles.viewerInfo}>
        {!detailsLoading && details && (
          <>
            <div className={styles.imageWrapper}>
              <img src={details.viewer.avatarUrl} alt={details.viewer.name} />
            </div>

            <h2>{details.viewer.name}</h2>
            <h4>@{details.viewer.login}</h4>
            <p>
              <GoLocation /> {details.viewer.location}
            </p>
            <p>
              <AiOutlineCalendar />
              Joined{" "}
              {new Date(details.viewer.createdAt).toLocaleDateString(
                undefined,
                {
                  year: "numeric",
                  month: "long",
                }
              )}
            </p>
            <div className={styles.infoCounts}>
              <p>{details.viewer.followers.totalCount} Followers</p>
              <p>{details.viewer.following.totalCount} Following</p>
              <p>{details.viewer.repositories.totalCount} Repos</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Profile;
