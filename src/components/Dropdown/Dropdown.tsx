import React from "react";
import { ChevronDown } from "react-feather";

const Dropdown: React.FC = () => {
  return (
    <label htmlFor="region" className="select-label">
      <ChevronDown />
      <select
        id="region"
        onChange={() => console.log("change")}
        name="region"
        value="Asia"
        className="select-element"
      >
        <option disabled hidden className="select-optin" value="">
          Placeholder
        </option>
      </select>
    </label>
  );
};

export default Dropdown;
