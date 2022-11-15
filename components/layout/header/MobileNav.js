import { NAV_LINKS } from "../../../pageData/data";
import NavLink from "../../ui/NavLink";
import classes from "./MobileNav.module.css";

const MobileNav = ({ setOpen, isOpen }) => {
  return (
    <div className={`${classes.MobileNav} ${isOpen ? classes.Open : ""}`}>
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
  );
};

export default MobileNav;
