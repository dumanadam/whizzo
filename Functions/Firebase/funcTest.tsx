import React from 'react'
import { DataSnapshot } from 'firebase/database'
import { useSession, signIn, signOut, SessionContext } from "next-auth/react";

function funcTest() {
  const { data: session, status } = useSession();

  console.log('session', session);
  return (
    <div>funcTest</div>
  )
}

export default funcTest