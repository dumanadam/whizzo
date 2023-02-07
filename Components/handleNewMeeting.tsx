import React from 'react'
import { app, realDb } from "../firebaseConfig";
import { ref, set, get, onValue, push, child, update } from "firebase/database";
import { useSession, signIn, signOut, SessionContext, SessionProvider } from "next-auth/react";
import { v4 } from "uuid";
import { Session } from 'next-auth';
import { useUserDetails } from '../Functions/UserContext';



export default function HandleNewMeeting(session : Session, props : React.PropsWithChildren ) {   
    console.log('handlenewmeeting props', props);
    console.log('ref', realDb);
    console.log('ses', session);
    const {user : {name, email, image}}  = session;
    console.log('ses name', name);
    console.log("user context", useUserDetails());
    

    
    const starCountRef = ref(realDb, 'meeetings/');
    const newPostKey = push(child(ref(realDb), 'users')).key;

    set(
        ref(realDb, "meetings/" + email.replace(/\./g, ",")),
        {
          username: session.user.name,
          email: session.user.email,
          profile_picture: session.user.image,
        }
      );
    
     set(ref(realDb, 'meetings/' + v4()), {
        attendees: session.user.name,
        email: email,
        profile_picture : image,
        creator: name
      });
    
  return (
    <>
    <div>handleNewMeeting</div>
   
    </>
  )
}
