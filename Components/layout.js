import MyNavBar from "../Components/mynavbar";
import { useSession, signIn, signOut, SessionContext } from "next-auth/react";
import { UserContextProvider } from "../Functions/UserContext";

export default function Layout({ children }) {
  return (
    <>
      <UserContextProvider>
        <div className="dark:bg-blue1 text-center text-sm text-gray-300 dark:text-bl h-screen w-screen">
          <MyNavBar />
          <main>{children}</main>
        </div>
      </UserContextProvider>
    </>
  );
}
