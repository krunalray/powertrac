import React from "react";
import Header from "../Components/common/Header/header";
import Sidebar from "../Components/common/Sidebar/sidebar";
const Verticallayout = ({ children }) => {
  return (
    <div>
  
      <Header />
      {children}
    </div>
  );
};

export default Verticallayout;
