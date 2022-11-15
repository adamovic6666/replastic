import { useState } from "react";
import NavLink from "../../ui/NavLink";
import Hamburger from "hamburger-react";
import Logo from "../../ui/Logo";
import { NAV_LINKS } from "../../../pageData/data";
import classes from "./Header.module.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={`${classes.Header} container`}>
      <div className={classes.NavWrapper}>
        <Logo />
        <nav className={classes.Nav}>
          <ul className={classes.NavList}>
            {NAV_LINKS.map(({ name, id, href }) => (
              <NavLink href={`#${href}`} key={id} setOpen={setOpen}>
                {name}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </header>
  );
};

export default Header;
