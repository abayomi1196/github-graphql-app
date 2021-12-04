import Loader from "react-loader-spinner";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";

import styles from "./Profile.module.css";
import { ProfileProps } from "types";

function Profile({ data, loading, error }: ProfileProps) {
  return (
    <>
      {loading && (
        <p className={styles.loadingContainer}>
          <Loader
            type='Bars'
            color='rgba(0, 118, 255, 0.2)'
            width={"30px"}
            height={"30px"}
          />
        </p>
      )}
      {error && <p className={styles.errorContainer}>error...</p>}
      <div className={styles.viewerInfo}>
        {!loading && data && (
          <>
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
              })}
            </p>
            <div className={styles.infoCounts}>
              <p>{data.viewer.followers.totalCount} Followers</p>
              <p>{data.viewer.following.totalCount} Following</p>
              <p>{data.viewer.repositories.totalCount} Repos</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Profile;
