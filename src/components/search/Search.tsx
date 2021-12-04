import { useRef, useState, useContext } from "react";

import { NameContext } from "context/NameContext";
import styles from "./Search.module.css";

function Search() {
  const { updateSearchTerm } = useContext(NameContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateSearchTerm(searchTerm.trim());
    inputRef.current?.blur();
  }

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <input
          type='text'
          placeholder='enter your username...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          ref={inputRef}
        />

        <button
          onClick={() => {
            setSearchTerm("");
            updateSearchTerm("");
          }}
          type='button'
        >
          Clear
        </button>
      </div>

      <small>Press enter to search</small>
    </form>
  );
}

export default Search;
