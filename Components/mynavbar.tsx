import React, { useEffect } from "react";
import { useSession, signIn, signOut, SessionContext } from "next-auth/react";
import "flowbite";
import { Navbar, Button, Dropdown, Avatar } from "flowbite-react";
import { useUserDetails } from "../Functions/UserContext";

function MyNavBar() {
  const { data: session, status } = useSession();
  const {userDetails, setUserDetails} = useUserDetails();
  
  useEffect(() => {
    console.log("navbar userDetauils", userDetails);
  }, [userDetails]);

  const IsLoggedIn = () => {
    if (status === "authenticated") {
      return (
        <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="http://localhost:3000">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Whizzo Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Whizzo
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
              img={(props) => (
                <img
                  referrerPolicy="no-referrer"
                  src={session?.user.image}
                  {...props}
                />
              )}
            />
            
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{session?.user.name}</span>
              <span className="block truncate text-sm font-medium">
                {session?.user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/meetings/" active={true}>
            Sessions
          </Navbar.Link>
          <Navbar.Link href="/" onClick={() => signOut()}>
            Logout
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      );
    } else {
      return (
        <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="http://localhost:3000">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Whizzo Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Whizzo
          </span>
        </Navbar.Brand>
      </Navbar>
      )
    }
  };

  return (
    <>
     
        <IsLoggedIn />
     
    </>
  );
}

export default MyNavBar;
