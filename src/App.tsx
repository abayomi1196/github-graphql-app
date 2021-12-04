import styles from "./App.module.css";

import { ViewerDetails, GitOcto, Footer, SearchBar } from "components";

function App() {
  return (
    <div className={styles.container}>
      <GitOcto />

      <header className={styles.hero}>
        <h1>
          Github <span>Profile.</span>
        </h1>

        <SearchBar />
      </header>

      <ViewerDetails />

      <Footer />
    </div>
  );
}

export default App;
