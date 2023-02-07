import React from 'react'
import { ref, set, get, onValue, push, child, update } from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { v4 } from "uuid";
import { useSession } from 'next-auth/react';

function GetSession() {

    const { data: session, status } = useSession();
    console.log('sess', session);
    console.log('sesssadasd');
    return (<div>getSession</div>)
}

export default GetSession;