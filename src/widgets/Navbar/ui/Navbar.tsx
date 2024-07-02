import classNames from "classnames";
import style from "./Navbar.module.scss";
import {Link} from "@shared/ui/Link/Link";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

  return (
    <div className={classNames(style.navbar, className)}>

      <div className={style.links}>
        <Link to="/" title="Main" variant='secondary'>
          Main
        </Link>

        <Link to="/about" title="About" variant='secondary'>
          About
        </Link>
      </div>
    </div>
  );
};
