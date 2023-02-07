import React from "react";
import ButtonCard from "./Card/ButtonCard";

function MainBody() {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-500">
      <div className="flex">
        <ButtonCard />
      </div>
    </div>
  );
}

export default MainBody;
