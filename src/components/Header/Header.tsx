import React from "react";
import { Moon } from "react-feather";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router";

interface IHeader {
  title: string;
  toggleTheme: () => void;
}

const Header: React.FC<IHeader> = ({ title, toggleTheme }) => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles["header-inner"]}>
          <h3>
            <button onClick={() => navigate(`/`)}>{title}</button>
          </h3>
          <button
            type="button"
            aria-label="Change theme"
            className={styles["switch-theme"]}
            onClick={toggleTheme}
          >
            <Moon fill="#fff" />
            <span>Dark mode</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
