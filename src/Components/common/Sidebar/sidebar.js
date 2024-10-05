import React from "react";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Logoimg from "../../../assets/images/logo-img.png";
import "./sidebar.scss";
const Sidebar = () => {
  const history = useHistory();
  return (
    <div className="sidebar-section">
      <div className="sidebar-inner">
        <div className="logo-img">
          <Image src={Logoimg} onClick={() => history.push("/")} />
        </div>
        <div className="logo-listing">
          <ul>
            <li>
              <a>Gas Stations</a>
            </li>
            <li>
              <a>Covenience Stores</a>
            </li>
            <li>
              <a>Liquor Stores</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
