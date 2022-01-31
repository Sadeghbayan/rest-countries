import React from "react";
import styles from "./CountryList.module.scss";
import CountryCard from "../CountryCard/CountryCard";

interface ICountries {
  countries: ICountry[];
}

const CountryList: React.FC<ICountries> = ({ countries }) => {
  return (
    <div className={styles.countries}>
      {countries.map((country) => (
        <CountryCard country={country} key={country.name} />
      ))}
    </div>
  );
};

export default CountryList;
