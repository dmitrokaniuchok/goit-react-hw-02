import styles from "./Description.module.css";

export default function Description() {
  return (
    <>
      <h1 className={styles.title}>Sip Happens Café</h1>
      <p className={styles.descr}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
}
