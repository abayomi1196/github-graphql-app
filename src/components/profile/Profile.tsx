import Loader from "react-loader-spinner";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";

import styles from "./Profile.module.css";
import { ProfileProps } from "types";

function Profile({ data, loading, error, type }: ProfileProps) {
  const user = data && data[type];

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
        {!loading && user && (
          <>
            <div className={styles.imageWrapper}>
              <img src={user.avatarUrl} alt={user.name} />
            </div>

            <h2>{user.name}</h2>
            <h4>@{user.login}</h4>
            <p>
              <GoLocation /> {user.location}
            </p>
            <p>
              <AiOutlineCalendar />
              Joined{" "}
              {new Date(user.createdAt).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
              })}
            </p>
            <div className={styles.infoCounts}>
              <p>{user.followers.totalCount} Followers</p>
              <p>{user.following.totalCount} Following</p>
              <p>{user.repositories.totalCount} Repos</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Profile;
