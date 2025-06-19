import styles from "../styles/Rightside.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo-twitter.png";
// import { useNavigate } from 'react-router-dom'


function Rightside() {
  // const navigate = useNavigate();

  return (
  <div className={styles.right}>
      <Image
        src="/images/logo-twitter.png"
        alt="logo"
        width="50"
        height="50"
        className={styles.logo}
      />
      <h1 className={styles.title}>
        See what’s<br /> happening
      </h1>
      <p className={styles.subtitle}>Join Hackatweet today.</p>
      <button className={`${styles.btn} ${styles.signup}`}><Link href='/signup'>Sign up</Link></button>
      <p className={styles.loginText}>Already have an account?</p>
      <button className={`${styles.btn} ${styles.signin}`}>Sign in</button>
    </div> 
  );
}

export default Rightside;
