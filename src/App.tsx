import React, { useState, useEffect } from "react";
import "./App.scss";
import CountryList from "./components/CountryList/CountryList";
import Dropdown from "./components/Dropdown/Dropdown";
import Header from "./components/Header/Header";
import SearchInput from "./components/Search/SearchInput";
import Country from "./utils/api";

interface IState {
  countries: ICountry[];
  status: "loading" | "complete" | "error";
  error: string;
}

type ITheme = "light" | "dark";
const regionOptions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

function App() {
  const [defaultTheme, setDefaultTheme] = useState<ITheme>("light");
  const [filterByRegion, setFilterByRegion] = useState("");
  const [state, setState] = useState<IState>({
    countries: [],
    status: "loading",
    error: "",
  });

  const toggleTheme = () => {
    if (defaultTheme === "dark") {
      setDefaultTheme("light");
      document.querySelector("html")?.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setDefaultTheme("dark");
      document.querySelector("html")?.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const displaySomeCountries =
    state.status === "complete" ? state.countries.slice(0, 8) : [];

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

    console.log(data, error);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="app">
      <Header title="Where in the world ?" toggleTheme={toggleTheme} />
      <div className="container">
        <main>
          <SearchInput
            placeholder="Search for a country..."
            handleChange={(e) => console.log(e)}
          />
          <Dropdown
            onChange={(e) => setFilterByRegion(e.target.value)}
            placeholder="Filter by Region"
            name="region"
            value={filterByRegion}
            options={regionOptions}
          />
          <section className="countries">
            {state.status === "complete" && (
              <CountryList countries={displaySomeCountries} />
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
