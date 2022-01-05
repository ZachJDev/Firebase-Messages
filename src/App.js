// import logo from './logo.svg';
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Message from "./components/Message";
import { useState } from "react";
import { MessagesList } from "./components/MessagesList";

console.log(JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG));
// Initialize Firebase
const app = initializeApp(JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG));
const provider = new GoogleAuthProvider();
const auth = getAuth();

function App() {
  const [user, setUser] = useState(null);
  const handleSignIn = async () => {
    const signInResult = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(signInResult);
    const token = credential.accessToken;
    setUser(signInResult.user);
  };
  return (
    <div className="App">
      <h1>
        {`Welcome to the Message Repo` +
          `${user ? `, ${user.displayName}` : ""}`}
      </h1>
      <h2> Sign in Below:</h2>
      <button onClick={handleSignIn}>Sign In</button>
      {user && <Message />}
      <MessagesList />
    </div>
  );
}

export default App;
