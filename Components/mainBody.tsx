import React from "react";
import { useSession, signIn, signOut, SessionContext } from "next-auth/react";
import "flowbite";

import MyNavBar from "./mynavbar";
import ButtonCard from "./Card/ButtonCard";

function loggedin(props) {
  const { data: session, status } = useSession();
  return (
    <>
      <div className="grid h-screen place-items-center">
       <ButtonCard props={props}/>
      </div>
    </>
  );
}

export default loggedin;
