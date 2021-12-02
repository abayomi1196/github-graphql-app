import { useQuery } from "@apollo/client";
import { GET_VIEWER_DETAILS } from "graphql/queries/myDetails";

import { ViewerDetails, ViewerDetailsVars } from "types";

import styles from "./ViewerDetails.module.css";

function ViewerDetailsWrapper() {
  const { data, loading, error } = useQuery<ViewerDetails, ViewerDetailsVars>(
    GET_VIEWER_DETAILS,
    {
      variables: {
        first: 10,
        orderBy: {
          field: "STARGAZERS",
          direction: "DESC",
        },
      },
    }
  );

  console.log(data, loading, error);

  return (
    <div className={styles.container}>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading data...</p>}

      {!loading && data && (
        <div className={styles.viewerWrapper}>
          <div className={styles.viewerInfo}>
            <div className={styles.imageWrapper}>
              <img src={data.viewer.avatarUrl} alt={data.viewer.name} />
            </div>

            <h2>{data.viewer.name}</h2>
            <h4>@{data.viewer.login}</h4>
            <p>{data.viewer.location}</p>
          </div>

          <div className={styles.viewerRepos}></div>
        </div>
      )}
    </div>
  );
}

export default ViewerDetailsWrapper;
