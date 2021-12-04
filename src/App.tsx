import { useContext } from "react";
import { NameContext } from "./context/NameContext";

import styles from "./App.module.css";

import {
  ViewerDetails,
  SearchedUser,
  GitOcto,
  Footer,
  SearchBar,
} from "components";

function App() {
  const { searchTerm } = useContext(NameContext);

  return (
    <div className={styles.container}>
      <GitOcto />

      <header className={styles.hero}>
        <h1>
          Github <span>Profile.</span>
        </h1>

        <SearchBar />
      </header>

      {searchTerm ? <SearchedUser /> : <ViewerDetails />}

      <Footer />
    </div>
  );
}

export default App;
