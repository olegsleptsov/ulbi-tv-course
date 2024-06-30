import classnames from "classnames";

import { useTheme } from "@app/providers/ThemeProvider";
import { AppRouter } from "@app/routes";

import "@app/styles/index.scss";
import {Navbar} from "@widgets/Navbar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classnames("app", `app_theme_${theme}`)}>
      <Navbar />

      <AppRouter/>

      <button onClick={toggleTheme}>Change theme</button>
    </div>
  );
};
