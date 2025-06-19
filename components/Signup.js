import styles from "../styles/SignUp.module.css"
import Image from "next/image";
import { useState } from "react"

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleClick () {

    }

  return (
    <div>
        <Image
            src="/images/logo-twitter.png"
            alt="logo"
            width="50"
            height="50"
            className={styles.logo}
        />
        <div className={styles.container}>
            <h4 className={styles.title}>
                Create your Hackatweet account
            </h4>
            <input type='text' placeholder="Firstname" onChange={(e) => setFirstName(e.target.value)} value={firstName}></input>
            <input type='text' placeholder="Username" onChange={(e) => setUserName(e.target.value)} value={userName}></input>
            <input type='text' placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}></input>

            <button className={`${styles.btn} ${styles.signup}`} onClick={handleClick}>Sign up</button>
        </div> 
    </div>
  );
}

export default SignUp;