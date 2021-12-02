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

  return <div className={styles.container}></div>;
}

export default ViewerDetailsWrapper;
