import React from "react";
import styles from "./Header.module.scss";

interface IHeader {
  title: string;
  toggleTheme: () => void;
}

const Header: React.FC<IHeader> = ({ title, toggleTheme }) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles["header-inner"]}>
          <h3>{title}</h3>
          <button
            type="button"
            aria-label="Change theme"
            className={styles["switch-theme"]}
            onClick={toggleTheme}
          >
            <span>Dark mode</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
