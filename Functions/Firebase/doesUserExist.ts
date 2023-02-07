import { DataSnapshot } from 'firebase/database'
import React from 'react'
import { useSession, signIn, signOut, SessionContext } from "next-auth/react";

const doesUserExist = (data: DataSnapshot) => {
 console.log("DataSnapshot", data);
 
    console.log('val', data.val)
  



}

export default doesUserExist