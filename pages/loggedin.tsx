import React from "react";
import MyNavBar from "../Components/mynavbar";
import MainBody from "../Components/mainBody";

function loggedin(props) {
  return (
    <>
      <MyNavBar/>
      <MainBody  state={props}/>
    </>
  );
}

export default loggedin;
