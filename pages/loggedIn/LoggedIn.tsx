import React from "react";

import MainBody from "../../Components/MainBody";
import ButtonCard from "../../Components/Card/ButtonCard";
import Meeting from "../../pages/meetings/index";
import JiraCard from "../../Components/JiraCard/JiraCard";

function loggedin() {
  return (
    <>
      <MainBody> 
            <ButtonCard />
            <Meeting></Meeting>
            <JiraCard></JiraCard>
      </MainBody>
    </>
  );
}

export default loggedin;
