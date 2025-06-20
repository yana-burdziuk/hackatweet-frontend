import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";
import Trends from "./Trends";
import Image from "next/image";
import logo from "../public/images/logo-twitter.png";
import default_user from "../public/images/default_user.jpeg";
import { useState, useEffect } from "react";

export default function Home() {
  const [tweetText, setTweetText] = useState("");
  const [tweets, setTweets] = useState([]);
  const [filterHashtag, setFilterHashtag] = useState(null);

  // chargement de tous les tweets à l'ouverture (+ tri si hashtag)
  useEffect(() => {
    let url = "http://localhost:3000/tweets/alltweets";
    if (filterHashtag) {
      url += `/${filterHashtag.toLowerCase()}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.result) setTweets(data.tweets);
      });
  }, [filterHashtag]);

  const postATweet = async () => {
    // recup le token du user pour pouvoir poster un tweet
    const token =localStorage.getItem("token");
    // pas de tweet -> on arrete
    if (!tweetText) return;
    // sinon on crée le tweet dans la DB
    const response = await fetch("http://localhost:3000/tweets/addtweet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tweet: tweetText,
        token: token,
      }),
    });

    const data = await response.json();
    if (data.result) {
      setTweetText("");
      let url = "http://localhost:3000/tweets/alltweets";
      if (filterHashtag) {
        url += `/${filterHashtag.toLowerCase()}`;
      }
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.result) setTweets(data.tweets);
        });
    }
  };
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
            <button className={styles.tweetButton} onClick={postATweet}>
              Tweet
            </button>
          </div>
        </div>
        <div>
          {tweets.map((tweet, index) => (
            <Tweet
              key={index}
              tweet={tweet}
              setFilterHashtag={setFilterHashtag}
            />
          ))}
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
