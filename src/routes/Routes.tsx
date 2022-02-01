import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import Header from "../components/Header/Header";
const Home = React.lazy(() => import("../pages/Home/Home"));
const CountryDetails = React.lazy(
  () => import("../pages/CountryDetails/CountryDetails")
);

type UserTheme = "light" | "dark";

const AppRoutes = () => {
  const [userTheme, setUserTheme] = useState<UserTheme>("light");

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/:countryCode", element: <CountryDetails /> },
  ]);

  const toggleTheme = () => {
    if (userTheme === "dark") {
      setUserTheme("light");
      document.querySelector("html")?.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setUserTheme("dark");
      document.querySelector("html")?.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <div className="app">
      <Header title="Where in the world ?" toggleTheme={toggleTheme} />
      <main>
        <Suspense fallback="Loading ...">{routes}</Suspense>
      </main>
    </div>
  );
};

export default AppRoutes;
