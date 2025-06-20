import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";
import Trends from "./Trends";
import Image from "next/image";
import logo from "../public/images/logo-twitter.png";
import default_user from "../public/images/default_user.jpeg";
import { useState } from "react";

export default function Home() {
  const [tweetText, setTweetText] = useState("");

  return (
    <main className={styles.container}>
      <div className={styles.left}>
      <div className={styles.leftTop}>
        <Image src={logo} alt="Twitter logo" width={60} height={60} />
        </div>
        <div className={styles.userAccount}>
          <Image
            src={default_user}
            alt="User account"
            className={styles.userLogo}
            width={40}
            height={40}
          />
          <span className={styles.name}> John </span>
          <span className={styles.username}> @john_doe</span>
        </div>
      </div>
      <div className={styles.center}>
        Home
        <div>
          <textarea
            type="text"
            placeholder="What's up ?"
            className={styles.inputTweet}
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            maxLength={280}
          />
          <div className={styles.tweetProperties}>
            <div className={styles.textCount}>{tweetText.length} / 280</div>
            <button className={styles.tweetButton}>Tweet</button>
          </div>
        </div>
        <div>
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
      </div>
      <div className={styles.right}>
        Trends
        <div>
          <Trends />
        </div>
      </div>
    </main>
  );
}
