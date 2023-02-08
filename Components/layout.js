import MyNavBar from "../Components/mynavbar";
import { useSession, signIn, signOut, SessionContext } from "next-auth/react";
import { UserContextProvider } from "../Functions/UserContext";

export default function Layout({ children }) {
  return (
    <>
      <UserContextProvider>
        <MyNavBar />
        <main className="bg-sky-900 h-screen">{children}</main>
      </UserContextProvider>
    </>
  );
}
