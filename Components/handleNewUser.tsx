import React from 'react'
import {app} from "../firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function handleNewMeeting(props) {
    const provider = new GoogleAuthProvider();
  
    console.log('app',app);
    const auth = getAuth();
    const result = signInWithPopup(auth, provider);
    console.log("result", result);
  return (
    <>
    <div>handleNewMeeting</div>
    
    </>
  )
}

export default handleNewMeeting