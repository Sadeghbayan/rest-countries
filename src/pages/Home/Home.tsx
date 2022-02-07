import React, { useState, useEffect, useCallback } from "react";
import Loader from "../../components/Loader/Loader";
import CountryList from "../../components/CountryList/CountryList";
import Dropdown from "../../components/Dropdown/Dropdown";
import SearchInput from "../../components/Search/SearchInput";
import Country from "../../utils/api";
import styles from "./Home.module.scss";

interface IState {
  countries: ICountry[];
  status: "loading" | "complete" | "error";
  error: string;
}

const regionOptions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const displayCountries = (
  countries: ICountry[],
  filterByRegion?: string,
  query?: string
) => {
  if (!filterByRegion && !query) {
    return countries;
  }

  const result = countries.filter((item) => {
    if (filterByRegion && item.region === filterByRegion) {
      if (!query) {
        return true;
      }
      return item.name.toLowerCase().includes(query.toLowerCase());
    }

    if (query && !filterByRegion) {
      return item.name.toLowerCase().includes(query.toLowerCase());
    }

    return false;
  });

  return result;
};

const Home: React.FC = () => {
  const [filterByRegion, setFilterByRegion] = useState("");
  const [query, setQuery] = useState("");
  const [state, setState] = useState<IState>({
    countries: [],
    status: "loading",
    error: "",
  });

  const { countries, status, error } = state;

  const searchQuery = useCallback((value: string) => setQuery(value), []);

  const displaySomeCountries =
    filterByRegion || query
      ? displayCountries(countries, filterByRegion, query)
      : countries.slice(0, 8);

  const fetchCountries = async () => {
    const { data, error } = await Country.fetchAllCountries();
    if (error !== null) {
      setState({
        countries: data,
        status: "complete",
        error: "",
      });
    } else {
      setState((prevstate) => ({
        ...prevstate,
        status: "error",
        error: "There might be a problem",
      }));
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="container">
      <section className={styles["header-action"]}>
        <SearchInput
          placeholder="Search for a country..."
          handleChange={searchQuery}
        />
        <Dropdown
          onChange={(e) => setFilterByRegion(e.target.value)}
          placeholder="Filter by Region"
          name="region"
          value={filterByRegion}
          options={regionOptions}
        />
      </section>

      <section className="countries">
        {status !== "complete" ? (
          <div>
            {error && <div>{error}</div>}
            {status === "loading" && <Loader message="Finding countries..." />}
          </div>
        ) : (
          <div>
            <CountryList countries={displaySomeCountries} />
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
