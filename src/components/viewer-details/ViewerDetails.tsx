import { useQuery } from "@apollo/client";
import { GET_VIEWER_DETAILS } from "graphql/queries/myDetails";

import { ViewerDetails, ViewerDetailsVars } from "types";

import styles from "./ViewerDetails.module.css";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";

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
        languagesOrderBy: {
          direction: "DESC",
          field: "SIZE",
        },
      },
    }
  );

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
            <p>
              <GoLocation /> {data.viewer.location}
            </p>
            <p>
              <AiOutlineCalendar />
              Joined{" "}
              {new Date(data.viewer.createdAt).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <div className={styles.infoCounts}>
              <p>{data.viewer.followers.totalCount} Followers</p>
              <p>{data.viewer.following.totalCount} Following</p>
            </div>
          </div>

          <div className={styles.viewerRepos}>
            <h3>Top Repos</h3>

            <div className={styles.reposWrapper}>
              {data.viewer.repositories.nodes.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.url}
                  target='_blank'
                  rel='noreferrer'
                  className={styles.singleRepo}
                >
                  <div>
                    <h4>{repo.name}</h4>
                    <p>{repo.description}</p>
                  </div>
                  <p>
                    {repo.languages.nodes.slice(0, 1).map((lang) => (
                      <span key={lang.id} style={{ color: lang.color }}>
                        {lang.name}
                      </span>
                    ))}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewerDetailsWrapper;
