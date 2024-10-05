import React from "react";
import Footer from "../Components/common/Footer/footer";
import Header from "../Components/common/Header/header";
import Sidebar from "../Components/common/Sidebar/sidebar";
const Mainlayout = ({ children }) => {
  return (
    <div>
      <div className="main-content-fix">
      
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Mainlayout;
