import React from "react";
import Logo from "../../assets/Logo.svg";

function Sidebar() {
  return (
    <div>
      <div className="logo-container">
        <img src={Logo} alt="Website Logo" />
        <p className="logo-text">BORD</p>
      </div>
    </div>
  );
}

export default Sidebar;
