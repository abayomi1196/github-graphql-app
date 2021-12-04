import { useState, useContext } from "react";
import Loader from "react-loader-spinner";

import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

import Card from "../card/Card";
import styles from "./Repos.module.css";
import { ReposProps } from "types";
import { OptionsContext } from "context/OptionsContext";

function Repos({ data, loading, error, type }: ReposProps) {
  const { option, setNewOption, options } = useContext(OptionsContext);

  const [showDropdown, setShowDropdown] = useState(false);

  const user = data && data[type];

  return (
    <>
      <div className={styles.viewerRepos}>
        <h3>
          Top Repos{" "}
          <span>
            by{" "}
            <span className={styles.dropdown}>
              <button
                className={styles.dropdownBtn}
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                <label>{option.label}</label>
                {showDropdown ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </button>
              {showDropdown && (
                <ul className={styles.dropdownList}>
                  {options.map((item) => (
                    <li
                      key={item.value}
                      onClick={() => {
                        setNewOption(item);
                        setShowDropdown(false);
                      }}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              )}
            </span>
          </span>
        </h3>

        {loading && (
          <p className={styles.loadingContainer}>
            <Loader
              type='Bars'
              color='rgba(0, 118, 255, 0.2)'
              width={"50px"}
              height={"50px"}
            />
          </p>
        )}
        {error && <p className={styles.errorContainer}>Error loading data..</p>}
        <div className={styles.reposWrapper}>
          {!loading &&
            user &&
            user.repositories.nodes.map((repo) => (
              <Card key={repo.id} repo={repo} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Repos;
