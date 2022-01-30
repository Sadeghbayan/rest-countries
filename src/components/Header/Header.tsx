import React from "react";
import styles from "./Header.module.scss";

interface IHeader {
  title: string;
  toggleTheme: () => void;
}

const Header: React.FC<IHeader> = ({ title, toggleTheme }) => {
  return (
    <header className={styles.header}>
      <h3>{title}</h3>
      <button
        type="button"
        aria-label="Change theme"
        className="switch-theme"
        onClick={toggleTheme}
      >
        <span className="ml-2 font-semibold hidden sm:inline">Dark mode</span>
      </button>
    </header>
  );
};

export default Header;
