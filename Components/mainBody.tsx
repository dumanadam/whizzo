import React, { ReactElement } from "react";
import ButtonCard from "./Card/ButtonCard";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const MainBody: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen">{children}</div>
  );
};

export default MainBody;
