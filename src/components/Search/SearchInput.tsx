import React, { useState, useEffect } from "react";
import { Search } from "react-feather";
import styles from "./SearchInput.module.scss";

interface ISearch {
  placeholder?: string;
  value?: string;
  handleChange: (value: string) => void;
}

const SearchInput: React.FC<ISearch> = ({
  placeholder,
  value,
  handleChange,
}) => {
  const [query, setQuery] = useState(value || "");

  useEffect(() => {
    const debounce = setTimeout(() => {
      handleChange(query);
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [query, handleChange]);

  return (
    <div className={styles["search-wrapper"]}>
      <Search />
      <input
        className="search-box"
        type="text"
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
