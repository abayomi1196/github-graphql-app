import { AiOutlineFork } from "react-icons/ai";
import { RiStarSFill } from "react-icons/ri";
import { singleRepo } from "types";

import styles from "./Card.module.css";

interface CardProps {
  repo: singleRepo;
}

function Card({ repo }: CardProps) {
  return (
    <a
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
  );
}

export default Card;
