import '../styles/globals.css';
import Head from 'next/head';

// Redux toolkit imports
import { configureStore } from "@reduxjs/toolkit";

// React Redux imports
import { Provider } from "react-redux";

// Reducers imports
import user from "../reducers/user"

// Redux persist imports


const store = configureStore({
  reducer: user,
})

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
