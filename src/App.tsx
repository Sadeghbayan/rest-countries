import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import SearchInput from "./components/Search/SearchInput";

type ITheme = "light" | "dark";

function App() {
  const [defaultTheme, setDefaultTheme] = useState<ITheme>("light");
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
        <SearchInput
          placeholder="Search for a country..."
          handleChange={(e) => console.log(e)}
        />
      </div>
    </div>
  );
}

export default App;
