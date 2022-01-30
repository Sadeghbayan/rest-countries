import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";

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
    <div className="App">
      <Header title="Where in the world ?" toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
