import React from "react";
import styles from "CountryList.module.scss";

interface ICountries {
  countries: Country[];
}

const CountryList: React.FC<ICountries> = ({ countries }) => {
  return <div>CountryList</div>;
};

export default CountryList;
