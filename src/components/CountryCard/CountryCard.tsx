import React from "react";
import styles from "./CountryCard.module.scss";
import Img from "react-cool-img";

interface ICountryCard {
  country: ICountry;
}

const CountryCard: React.FC<ICountryCard> = ({ country }) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-image"]}>
        <Img src={country.flag} alt={`Flag of ${country.name}`} />
      </div>
      <div className={styles["card-info"]}>
        <div className={styles["card-name"]}>
          <h3>{country.name}</h3>
        </div>
        <div className={styles["card-label"]}>
          <span>Population: </span> {country.population.toLocaleString("en-US")}
        </div>
        <div className={styles["card-label"]}>
          <span>Region: </span> {country.region}
        </div>
        <div className={styles["card-label"]}>
          <span>Capital: </span> {country.capital}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
