import React from "react";
import { Card } from "flowbite-react";
import Link from "next/link";


export default function JiraCard() {
  return (
    <Card className="m-4 w-[278px]">
    <div className="flex flex-col items-center pb-6 p-4">
        <p className="text-center pt-2 px-4 items-center text-xl dark:text-gray-400 text-black">
          Jira Cards
        </p>
        <p className="text-center pb-2 px-4 items-center text-sm text-gray-500">
          Explore your cards
        </p>
        <div className="flex space-x-3 text-center mt-8">
          <Link
            href="/meetings/create"
            className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Explore Cards
          </Link>
         {/*  <Link
            href="/meetings"
            className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//            onClick={(e) => signOut()}
          >
            Join
          </Link> */}
        </div>
      </div>
    </Card>
  );
}
