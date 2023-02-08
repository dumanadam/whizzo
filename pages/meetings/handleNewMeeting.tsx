import React, { useEffect } from "react";
import { app, realDb } from "../../firebaseConfig";
import { ref, set, get, onValue, push, child, update } from "firebase/database";
import {
  useSession,
  signIn,
  signOut,
  SessionContext,
  SessionProvider,
} from "next-auth/react";
import { v4 } from "uuid";
import { Session } from "next-auth";
import { useUserDetails } from "../../Functions/UserContext";

export default function HandleNewMeeting(roomName: string, timer: string) {
  console.log("ref", realDb);
  console.log("ses name", name);
  const {userDetails, setUserDetails} = useUserDetails();

  useEffect(() => {
    console.log("index userDetauils", userDetails);
  }, [userDetails]);

  console.log("user context", useUserDetails());
  const starCountRef = ref(realDb, "meeetings/");
  const newPostKey = push(child(ref(realDb), "users")).key;

/*   set(ref(realDb, "meetings/" + email.replace(/\./g, ",")), {
    attendees: [session.user.name],
    email: email,
    profile_picture: image,
    creator: name,
    timer: 30,
  }); */

  /*  set(ref(realDb, 'meetings/' + v4()), {
        attendees: session.user.name,
        email: email,
        profile_picture : image,
        creator: name
         username: session.user.name,
          email: session.user.email,
          profile_picture: session.user.image,
      }); */

  return (
    <>
      <div>handleNewMeeting</div>
    </>
  );
}
