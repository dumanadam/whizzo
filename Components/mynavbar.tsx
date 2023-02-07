import React from "react";
import { useSession, signIn, signOut, SessionContext } from "next-auth/react";
import "flowbite";
import { Navbar, Button, Dropdown, Avatar } from "flowbite-react";

function MyNavBar() {
  const { data: session } = useSession();
  return (
    <>
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
                alt="User settings"
                img={session.user.image}
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{session.user.name}</span>
              <span className="block truncate text-sm font-medium">
                {session.user.email}
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
    </>
  );
}

export default MyNavBar;
