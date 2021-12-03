import styles from "./App.module.css";

import { ViewerDetails, GitOcto } from "components";

function App() {
  return (
    <div className={styles.container}>
      <GitOcto />

      <header className={styles.hero}>
        <h1>
          Github <span>Profile.</span>
        </h1>
        <p>Search your github username.</p>
      </header>

      <ViewerDetails />
    </div>
  );
}

export default App;
