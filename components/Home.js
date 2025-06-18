import styles from "../styles/Home.module.css";
import LeftSide from "./Leftsidescreen";
import RightSide from "./Rightsidescreen";

export default function Home() {
  return (
    <main className={styles.container}>
      <LeftSide />
      <RightSide />  
    </main>
  );
}

