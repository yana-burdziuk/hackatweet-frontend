import styles from "../styles/Tweet.module.css";
import Image from "next/image";
import default_user from "../public/images/default_user.jpeg";
import { FaRegHeart, FaTrash } from "react-icons/fa";

export default function Tweet({ tweet, setFilterHashtag }) {
  // à voir comment on veut gerer la date
  const date = new Date(tweet.createdAt).toLocaleString();

  function parseHashtags(text) {
    return text.split(/(\s+)/).map((part, index) => {
      if (part.startsWith("#")) {
        const tag = part.substring(1);
        return (
          <span
            key={index}
            style={{
              color: "#1DA1F2",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => setFilterHashtag(tag.toLowerCase())}
          >
            {part}
          </span>
        );
      }
      return part;
    });
  }

  return (
    <div className={styles.tweet}>
      <div className={styles.header}>
        <Image
          src={default_user}
          alt="User logo"
          width={50}
          height={50}
          className={styles.userLogo}
        />
        <span className={styles.name}> {tweet.user.firstName}</span>
        <span className={styles.username}> {tweet.user.username}</span>
        <span className={styles.date}>• {date}</span>
      </div>
      <div className={styles.content}>{parseHashtags(tweet.text)}</div>

      <div className={styles.actions}>
        <button className={styles.actionBtn}>
          <FaRegHeart /> <span>0</span>
        </button>
        <button className={styles.actionBtn}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
