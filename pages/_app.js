import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import  {UserContextProvider} from "../Functions/UserContext";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </SessionProvider>
  );
}
