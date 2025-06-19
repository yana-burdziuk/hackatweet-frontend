import styles from "../styles/Trends.module.css";

export default function Trends() {
  return (
    <div className={styles.trendsContainer}>
      <div className={styles.trends}>
        <span className={styles.hashtag}>#premierhashtag</span>
        <span className={styles.hashtagCount}>5 tweets</span>
      </div>
      <div className={styles.trends}>
        <span className={styles.hashtag}>#premierhashtag</span>
        <span className={styles.hashtagCount}>5 tweets</span>
      </div>
    </div>
  );
}
