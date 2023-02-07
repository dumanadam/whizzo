"use client";
import React, { useEffect } from "react";
import { Navbar, Button, Dropdown, Card } from "flowbite-react";
import { useSession, signIn, signOut, SessionContext } from "next-auth/react";
import { useState } from "react";
import handleNewMeeting from "../handleNewMeeting";
import { useCollection } from "react-firebase-hooks/firestore";
import { app } from "../../firebaseConfig";

export default function ButtonCard(props) {
  const { data: session, status } = useSession();
var a = session;
  return (
    <Card>
      <Card>
        <div className="flex flex-col items-center pb-10">
          <p className="w-56 text-center pt-2 px-4 items-center text-xl text-black">
            Whizzo
          </p>
          <p className="text-center pb-2 px-4 items-center text-sm text-gray-500">
            Sprint Reviews done quick!
          </p>
          
          <h5 className="text-gray-900 text-center font-medium mb-2 ">Meeting Room</h5>
            <div className="flex space-x-3 text-center">
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={(e) => handleNewMeeting(session, props)}
              >
                Create
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={(e) => signOut()}
              >
                Join
              </a>
            </div>
          
        </div>
      </Card>
    </Card>
  );
}
