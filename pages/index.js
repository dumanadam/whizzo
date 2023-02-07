import { useSession, signIn, signOut } from "next-auth/react";
import { ref, set, get, onValue, push, child, update } from "firebase/database";
import { app, realDb } from "../firebaseConfig";
import Loggedin from "../pages/loggedIn/LoggedIn";
import { useEffect, useState } from "react";
import LoggedOut from "../Components/LoggedOut/LoggedOut";
import { useUserDetails } from "../Functions/UserContext";
import MyNavBar from "../Components/mynavbar";

export default function Home(props) {
  const { data: session, status } = useSession();
  const {userDetails, setUserDetails} = useUserDetails();

  console.log("user context", useUserDetails());
  console.log("props", props);

  useEffect(() => {
    console.log("status", status);
    if(status === "authenticated"){
      checkForUser();
    }
  }, [status]);

  useEffect(() => {
    console.log("index userDetauils", userDetails);
  }, [userDetails]);

  function checkForUser() {
    const myRef = ref(realDb, "users/");
    get(child(myRef, `${session.user.email.replace(/\./g, ",")}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log("user found", snapshot.val());
          setUserDetails({...session.user})
        } else {
          console.log("User not found", session.user.email.replace(/\./g, ","));
          createUser();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function createUser() {
    console.log("creatingUser");
    var userToAdd = {
      username: session.user.name,
      email: session.user.email,
      profile_picture: session.user.image,
    }
    set(ref(realDb, "users/" + session.user.email.replace(/\./g, ",")), userToAdd);
  }

  if (status === "authenticated") {
    return (
      <>
    <Loggedin/>
   </>
    
    );
  } else {
    return <LoggedOut />;
  }
  
}
