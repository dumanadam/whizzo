import React from 'react'
import { signIn} from "next-auth/react";

export default function LoggedOut() { 

    return (
      <section className="grid h-screen place-items-center">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-center items-center text-center">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Whizzo
        </h2>
        <h5 className="mb-1 text-sm font-bold tracking-tight text-gray-600 dark:text-slate-400">
          Sprint reviews done quick!
        </h5>
        <br />

        <button
          type="button"
          onClick={() => signIn()}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Login
        </button>
      </div>
    </section>
    )
  }

