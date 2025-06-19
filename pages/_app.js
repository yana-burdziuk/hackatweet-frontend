import '../styles/globals.css';
import Head from 'next/head';

// Redux toolkit imports
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// React Redux imports
import { Provider } from "react-redux";

// Reducers imports
import user from "../reducers/user"

// Redux persist imports
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({ user });
const config = { key: "hackatweet", storage };

const store = configureStore({
  reducer: persistReducer(config, rootReducer),
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({ serializableCheck: false }),
})

const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <title>Hackatweet</title>
        </Head>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
