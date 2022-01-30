import React from "react";
import { ChevronDown } from "react-feather";

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
    <label htmlFor={name} className="select-label">
      <ChevronDown />
      <select
        id={name}
        onChange={onChange}
        name={name}
        value={value}
        className="select-element"
      >
        <option disabled hidden className="select-optin" value="">
          {placeholder}
        </option>
        {options.map((item) => (
          <option key={item} className="select-option">
            {item}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown;
