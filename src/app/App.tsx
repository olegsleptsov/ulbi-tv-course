import classnames from "classnames";

import {useTheme} from "@features/changeTheme";
import {AppRouter} from "@app/routes";

import "@app/styles/index.scss";
import {Navbar} from "@widgets/Navbar";

export const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classnames("app", `app_theme_${theme}`)}>
      <Navbar/>

      <AppRouter/>
    </div>
  );
};
