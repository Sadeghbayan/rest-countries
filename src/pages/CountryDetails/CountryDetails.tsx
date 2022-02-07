import React, { useEffect, useState } from "react";
import Country from "../../utils/api";
import { ArrowLeft } from "react-feather";
import Img from "react-cool-img";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import styles from "./CountryDetails.module.scss";
import classnames from "classnames";

interface ICountryInfo {
  label: string;
  children: React.ReactNode;
}
const CountryInfo = ({ label, children }: ICountryInfo) => (
  <li>
    <span>{label}: </span>
    {children}
  </li>
);

type CountryDetailInfo = Omit<ICountry, "borders"> & { borders?: IBorder[] };

const CountryDetails: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState<CountryDetailInfo>();

  const fetchCountryByCode = async (countryName: string) => {
    const { data, error } = await Country.fetchCountryByCode(countryName);
    if (error !== null) {
      if (data.borders && data.borders.length > 0) {
        const promises = data.borders.map((item: string) => {
          return Country.fetchCountryByCode(item).then(({ data }) => data);
        });
        const borders = await Promise.all(promises);
        return setCountry({ ...data, borders });
      }
      return setCountry({ ...data, borders: undefined });
    }
  };
  useEffect(() => {
    fetchCountryByCode(params.countryCode || "");
  }, [params.countryCode]);

  if (!country) {
    return (
      <div className="container">
        <Loader message="Loading country details" />
      </div>
    );
  }

  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    borders,
    languages,
    currencies,
  } = country || {};

  return (
    <div className="container">
      <nav>
        <button
          className={classnames(styles.btn)}
          type="button"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft />
          Back
        </button>
      </nav>
      <div className={styles["country-wrapper"]}>
        <div className={styles["country-image"]}>
          <Img src={flag} alt={`Flag of ${name}`} className="" />
        </div>
        <section className={styles["country-info"]}>
          <h2>{name}</h2>
          <div className={styles["country-info-details"]}>
            <ul>
              <CountryInfo label="Native name">{nativeName}</CountryInfo>
              <CountryInfo label="Population">{population}</CountryInfo>
              <CountryInfo label="Region">{region}</CountryInfo>
              <CountryInfo label="Sub Region">{subregion}</CountryInfo>
              <CountryInfo label="Capital">{capital}</CountryInfo>
            </ul>
            <ul>
              <CountryInfo label="Top Level Domain">
                {topLevelDomain?.join(", ")}
              </CountryInfo>
              <CountryInfo label="Currencies">
                {currencies?.map((item) => item.name).join(", ")}
              </CountryInfo>
              <CountryInfo label="Languages">
                {languages?.map((item) => item.name).join(", ")}
              </CountryInfo>
            </ul>
          </div>
          {borders && (
            <section className={styles["country-borders"]}>
              <span>Border Countries:</span>
              <ul>
                {borders.map((item) => (
                  <li key={item.alpha3Code}>
                    <button
                      type="button"
                      title={item.alpha3Code}
                      onClick={() => navigate(`/${item.alpha3Code}`)}
                      className={classnames(styles.btn, styles["btn-small"])}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>
      </div>
    </div>
  );
};

export default CountryDetails;
