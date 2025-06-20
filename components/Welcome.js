import styles from "../styles/Welcome.module.css";
import LeftSide from "../components/Leftsidescreen"
import RightSide from "../components/Rightsidescreen"

export default function Welcome() {
  return (
    <main className={styles.container}>
     <LeftSide /> 
      <RightSide />  
    </main>
  );
}