import styles from "../styles/Signup.module.css"
import Image from "next/image";
import { useRouter } from "next/router"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user'

function SignUp() {
    // Local state variables
    const [firstName, setFirstName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    // Redux state
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.value)
    console.log(user); //test Majdou

    // Next routing
    const router = useRouter();

    function handleClick () {
        fetch("http://localhost:3000/users/signup",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstName, userName, password})
        })
        .then(res => res.json())
        .then(data => {
            dispatch(login({userName, token: data.token}))
            setFirstName('');
            setUserName('');
            setPassword('');          
        })
    }

    // if user is signed in, he's redirected towards the "Home" page (which will contain the DisplayedTweets component)
    if(user.token) router.push('/homepage');

  return (
    <div className={styles.signuppage}>
        <Image
            src="/images/logo-twitter.png"
            alt="logo"
            width="70"
            height="70"
            className={styles.logo}
        />
        <h2 className={styles.title}>
                Create your Hackatweet account
        </h2>
        <div className={styles.container}>
            <input type='text' placeholder="Firstname" className={styles.input} onChange={(e) => setFirstName(e.target.value)} value={firstName}></input>
            <input type='text' placeholder="Username" className={styles.input} onChange={(e) => setUserName(e.target.value)} value={userName}></input>
            <input type='password' placeholder="Password" className={styles.input} onChange={(e) => setPassword(e.target.value)} value={password}></input>       
            <button className={`${styles.btn} ${styles.signup}`} onClick={handleClick}>Sign up</button>
        </div>
    </div>
  );
}

export default SignUp;