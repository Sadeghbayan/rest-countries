import React, { useState } from "react";
import "./App.scss";
import CountryList from "./components/CountryList/CountryList";
import Dropdown from "./components/Dropdown/Dropdown";
import Header from "./components/Header/Header";
import SearchInput from "./components/Search/SearchInput";

type ITheme = "light" | "dark";
const regionOptions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

function App() {
  const [defaultTheme, setDefaultTheme] = useState<ITheme>("light");
  const [filterByRegion, setFilterByRegion] = useState("");

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
            <CountryList />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
