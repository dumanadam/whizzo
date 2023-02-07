import MyNavBar from '../Components/mynavbar'
import { useSession, signIn, signOut, SessionContext } from "next-auth/react";

export default function Layout({ children }) {
  return (
    <>
      <MyNavBar />
      <main className='bg-sky-900 h-screen'>{children}</main>
    </>
  )
}