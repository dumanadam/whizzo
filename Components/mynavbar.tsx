import React, { useEffect } from "react";
import { useSession, signIn, signOut, SessionContext } from "next-auth/react";
import "flowbite";
import { Navbar, Button, Dropdown, Avatar } from "flowbite-react";
import { useUserDetails } from "../Functions/UserContext";

function MyNavBar() {
  const { data: session, status } = useSession();
  const { userDetails, setUserDetails } = useUserDetails();

  useEffect(() => {
    console.log("navbar userDetauils", userDetails);
  }, [userDetails]);

  const IsLoggedIn = () => {
    if (status === "authenticated") {
      return (
        <>
           <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Sidebar"
          >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-sky-900 dark:bg-gray-800">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Meetings
                    </span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      3
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Cards 
                    </span>
                    <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      Pro
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Sign Out
                    </span>
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="flex-1 ml-3 text-left whitespace-nowrap">
                      Settings
                    </span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
               
              </ul>
              {/* <div className="flex justify-center align-bottom h-96 place-items-end">
                    <Navbar fluid={true} rounded={true} className="bg-transparent ">
                      <div className="flex md:order-2">
                        <Dropdown
                          arrowIcon={true}
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
                            <span className="block text-sm">
                              {session?.user.name}
                            </span>
                            <span className="block truncate text-sm font-medium">
                              {session?.user.email}
                            </span>
                          </Dropdown.Header>
                          <Dropdown.Item>Settings</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}>Sign out</Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle/>
                      </div>
                    </Navbar>
                  </div>
                  <ul id="dropdown-example" className="hidden py-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Billing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Invoice
                  </a>
                </li>
              </ul> */}
            </div>

                 
             
          </aside>
{/*
          <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+1</p>
                </div>
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">Waiting for attendees</p>
                </div>
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+3</p>
                </div>
              </div>
              <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+4</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+5</p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+6</p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+7</p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+8</p>
                </div>
              </div>
              <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+9</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+0</p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+4</p>
              </div>
              </div>
            </div>
          </div>
          <div className="bg-red-700 h-full">

          </div> */}
        </>
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
      );
    }
  };

  return (
    <>
      <IsLoggedIn />
    </>
  );
}

export default MyNavBar;
