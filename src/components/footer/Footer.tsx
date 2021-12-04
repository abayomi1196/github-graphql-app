import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      Built with{" "}
      <a href='https://reactjs.org/' rel='noreferrer' target='_blank'>
        React
      </a>{" "}
      &bull;{" "}
      <a
        href='https://www.typescriptlang.org/'
        rel='noreferrer'
        target='_blank'
      >
        TypeScript
      </a>{" "}
      &bull;{" "}
      <a href='https://graphql.org/' rel='noreferrer' target='_blank'>
        GraphQL
      </a>{" "}
      &amp; more.
    </div>
  );
}

export default Footer;
