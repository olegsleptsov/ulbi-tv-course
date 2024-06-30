import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import classnames from "classnames";

import { useTheme } from "@app/providers/ThemeProvider";
import { AboutPage } from "@pages/About";
import { MainPage } from "@pages/Main";

import "@app/styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classnames("app", `app_theme_${theme}`)}>
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
          <Route path="/about" Component={AboutPage} />
        </Routes>
      </Suspense>
    </div>
  );
};
