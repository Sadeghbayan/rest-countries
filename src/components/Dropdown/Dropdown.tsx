import React from "react";
import { ChevronDown } from "react-feather";
import styles from "./Dropdown.module.scss";

type IOptions = string[];

interface IDropDown {
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  name: string;
  options: IOptions;
  value?: string;
}

const Dropdown: React.FC<IDropDown> = ({
  onChange,
  name,
  placeholder,
  options,
  value,
}) => {
  return (
    <label htmlFor={name} className={styles["select-label"]}>
      <ChevronDown />
      <select id={name} onChange={onChange} name={name} value={value}>
        <option disabled hidden value="">
          {placeholder}
        </option>
        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown;
