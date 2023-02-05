import React from "react";
import { useSession, signIn, signOut, SessionContext } from "next-auth/react";
import "flowbite";

import MyNavBar from "./mynavbar";
import ButtonCard from "../Components/Card/buttonCard";

function loggedin() {
  const { data: session, status } = useSession();
  return (
    <>
      <div className="grid h-screen place-items-center">
       <ButtonCard/>
      </div>
    </>
  );
}

export default loggedin;
