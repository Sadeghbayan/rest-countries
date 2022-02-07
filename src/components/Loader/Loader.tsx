import React from "react";
import { Loader as LoaderIcon } from "react-feather";
import styles from "./Loader.module.scss";

interface ILoader {
  message?: string;
}

const Loader: React.FC<ILoader> = ({ message }) => (
  <div className={styles["loader"]}>
    <LoaderIcon className={styles["loader-animate"]} />
    <span className="animate-pulse font-semibold">{message}</span>
  </div>
);

export default Loader;
