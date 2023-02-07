import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { UserContextProvider } from "../Functions/UserContext";
import Layout from "../Components/layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <UserContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContextProvider>
    </SessionProvider>
  );
}
