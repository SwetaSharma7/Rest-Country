import React from "react";
import { useDarkMode } from "./Darkmode";

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={isDarkMode ? "header header-DM" : "header"}>
      <div>
        <p>Where in the World?</p>
      </div>
      <div className="toogle" onClick={toggleDarkMode}>
        <ion-icon name={isDarkMode ? "moon" : "moon-outline"}></ion-icon>
        <p>
          {isDarkMode ? 'Light Mode': 'Dark Mode'}
        </p>
      </div>
    </header>
  );
}

export default Header;
