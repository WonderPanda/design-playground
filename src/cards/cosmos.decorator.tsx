import React from "react";
import { CenterScreen } from "../wrappers/CenterScreen";

const decorator: React.FC = ({ children }) => {
  return <CenterScreen>{children}</CenterScreen>;
};

export default decorator;
