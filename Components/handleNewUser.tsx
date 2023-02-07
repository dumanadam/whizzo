import React from 'react'
import { app, realDB, initFirebase } from "../firebaseConfig";
import { ref, set, get, onValue } from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth"

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