import { Route, Routes } from "react-router";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { Suspense, lazy, useContext, useState } from "react";
import MainPage from "./pages/Main/MainPage";
import { useTheme } from "./theme/hooks/useTheme";
import { Theme } from "./theme/ThemeContext";
import classnames from "classnames";

const LazyAboutPage = lazy(() => import("./pages/About/AboutPage"));
const LazyCounter = lazy(() => import("./components/Counter"));

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classnames("app", {
        app_light_theme: theme === Theme.LIGHT,
        app_dark_theme: theme === Theme.DARK,
      })}
    >
      <button onClick={toggleTheme}>Change theme</button>
      <Link to="/" title="Main">
        Main
      </Link>

      <Link to="/about" title="About">
        About
      </Link>

      <Link to="/counter" title="counter">
        Counter
      </Link>

      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/about" Component={LazyAboutPage} />
          <Route path="/counter" Component={LazyCounter} />
        </Routes>
      </Suspense>
    </div>
  );
};
