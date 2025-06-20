import styles from "../styles/Signin.module.css"
import Image from "next/image";
import { useRouter } from "next/router"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user'

function SignIn() {
    // Local state variables
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    // Redux state
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.value)
    console.log(user); //test Majdou

    // Next routing
    const router = useRouter();

    function handleClick () {
        fetch("http://localhost:3000/users/signin",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userName, password})
        })
        .then(res => res.json())
        .then(data => {
            dispatch(login({userName, token: data.token}))
            setUserName('');
            setPassword('');          
        })
    }

    // if user is signed in, he's redirected towards the "Home" page (which will contain the DisplayedTweets component)
    if(user.token) router.push('/homepage');

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
                Log into your Hackatweet account
            </h4>
            <input type='text' placeholder="Username" onChange={(e) => setUserName(e.target.value)} value={userName}></input>
            <input type='text' placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}></input>

            <button className={`${styles.btn} ${styles.signin}`} onClick={handleClick}>Sign in</button>
        </div> 
    </div>
  );
}

export default SignIn;