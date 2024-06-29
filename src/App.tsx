import { Route, Routes } from "react-router";
import "./index.scss";
import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainPage from "./pages/Main/MainPage";

const LazyAboutPage = lazy(() => import("./pages/About/AboutPage"));
const LazyCounter = lazy(() => import("./components/Counter"));

export const App = () => {
  return (
    <div className="app">
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
