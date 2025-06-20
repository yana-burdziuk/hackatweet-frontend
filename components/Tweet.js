import styles from "../styles/Tweet.module.css";
import Image from "next/image";
import default_user from "../public/images/default_user.jpeg";
import { FaRegHeart, FaTrash } from "react-icons/fa";

export default function Tweet() {
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
        <span className={styles.name}> John</span>
        <span className={styles.username}> @john_doe</span>
        <span className={styles.date}>• 5 min ago</span>
      </div>

      <div className={styles.content}>
        Testing something ✨
        <br />
        Lorem Ipsum #lenferceprojet
      </div>

      <div className={styles.actions}>
        <button className={styles.actionBtn}>
          <FaRegHeart /> <span>12</span>
        </button>
        <button className={styles.actionBtn}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}