import styles from "../styles/Rightside.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo-twitter.png";
import { useRouter } from 'next/router'


function Rightside() {
  const router = useRouter();

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
      <h2 className={styles.subtitle}>Join Hackatweet today.</h2>
      <button className={`${styles.btn} ${styles.signup}`} onClick = {() => router.push('/signup')}>Sign up</button>
      <h5 className={styles.loginText}>Already have an account?</h5>
      <button className={`${styles.btn} ${styles.signin}`} onClick = {() => router.push('/signin')}>Sign in</button>
    </div> 
  );
}

export default Rightside;
