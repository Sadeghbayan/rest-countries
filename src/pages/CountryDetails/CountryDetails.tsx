import React, { useEffect, useState } from "react";
import Country from "../../utils/api";
import { ChevronLeft } from "react-feather";
import Img from "react-cool-img";
import { useParams, useLocation, useNavigate } from "react-router-dom";

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
  const location = useLocation();
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
    // if (location.pathname) {
    //   fetch(location.pathname.replace("/", ""));
    // }
    fetchCountryByCode(params.countryCode || "");
  }, [location.pathname]);

  console.log(country, "iiii");
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
    <div className="">
      <div className="">
        <button className="" type="button" onClick={() => navigate(-1)}>
          <ChevronLeft />
          Go back
        </button>
      </div>
      <div className="">
        <div className="">
          <Img src={flag} alt={`Flag of ${name}`} className="" />
        </div>
        <div>
          <section className="">
            {/* <h2 className="text-3xl font-bold">{name}</h2> */}
            <div className="">
              <ul className="">
                <CountryInfo label="Native name">{nativeName}</CountryInfo>
                <CountryInfo label="Population">{population}</CountryInfo>
                <CountryInfo label="Region">{region}</CountryInfo>
                <CountryInfo label="Sub Region">{subregion}</CountryInfo>
                <CountryInfo label="Capital">{capital}</CountryInfo>
              </ul>
              <ul className="">
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
          </section>
          <section className="">
            <span className="">Border Countries:</span>
            <ul className="">
              {borders &&
                borders.map((item) => (
                  <li key={item.alpha3Code}>
                    <button
                      type="button"
                      title={item.alpha3Code}
                      onClick={() => navigate(`/${item.alpha3Code}`)}
                      className=""
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
