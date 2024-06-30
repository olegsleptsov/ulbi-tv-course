import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { AboutPage } from "@pages/About";
import { MainPage } from "@pages/Main";
import { routerConfig } from "../config";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Routes>
        {Object.values(routerConfig).map(({ element, path }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
