import styles from "../styles/Welcome.module.css";

export default function Welcome() {
  return (
    <main className={styles.container}>
     <LeftSide /> 
      <RightSide />  
    </main>
  );
}