import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
function App() {
  const toggleTheme = () => {};

  return (
    <div className="App">
      <Header title="Where in the world ?" toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
