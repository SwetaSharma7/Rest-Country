import React from "react";
import { useContext } from "react";

function Header() {
  return (
    <div className="header">
      <div>
        <p>Where in the World?</p>
      </div>
      <div className="mode">
        <ion-icon name="moon-outline"></ion-icon>
        <p>Dark Mode</p>
      </div>
    </div>
  );
}

export default Header;

