import { useSession, signIn, signOut } from "next-auth/react"
import Loggedin from "./loggedin"

export default function Home() {

  const { data: session, status } = useSession()
  
  if (status === "authenticated") {
    console.log('session',session);
    console.log('status',status);
    return (
      <Loggedin session={session}/>
     /*  <section className="grid h-screen place-items-center">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hi {session?.user?.name}</h2><br />
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">You are signed in as {session?.user?.email}.</p>
          <button
            type="button"
            onClick={() => signOut()}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            Logout
          </button>
        </div>
      </section> */
    )
  }
  return (
    <section className="grid h-screen place-items-center">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-center items-center text-center">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Whizzo</h2>
        <h5 className="mb-1 text-sm font-bold tracking-tight text-gray-600 dark:text-slate-400">Sprint reviews done quick!</h5><br />
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Click the login button to get started!</p>
        <button
          type="button"
          onClick={() => signIn()}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Login
        </button>
      </div>
    </section>
  );
}