import { useState } from "react";
import Loader from "react-loader-spinner";

import { AiOutlineFork, AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { RiStarSFill } from "react-icons/ri";

import styles from "./Repos.module.css";
import { ReposProps } from "types";

function Repos({
  data,
  loading,
  error,
  options,
  selectedOption,
  setSelectedOption,
}: ReposProps) {
  const [showDropdown, setShowDropdown] = useState(false);

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
                <label>{selectedOption.label}</label>
                {showDropdown ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </button>
              {showDropdown && (
                <ul className={styles.dropdownList}>
                  {options.map((item) => (
                    <li
                      key={item.value}
                      onClick={() => {
                        setSelectedOption(item);
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
            data &&
            data.viewer.repositories.nodes.map((repo) => (
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

                  <div className={styles.repoCounts}>
                    {repo.stargazerCount > 0 && (
                      <span>
                        <RiStarSFill />
                        {repo.stargazerCount}
                      </span>
                    )}

                    {repo.forkCount > 0 && (
                      <span>
                        <AiOutlineFork />
                        {repo.forkCount}
                      </span>
                    )}
                  </div>
                </p>
              </a>
            ))}
        </div>
      </div>
    </>
  );
}

export default Repos;
