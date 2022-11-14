import { useState } from "react";
import NavLink from "../../ui/NavLink";
import Hamburger from "hamburger-react";
import Logo from "../../ui/Logo";
import { NAV_LINKS } from "../../../pageData/data";
import classes from "./Header.module.css";
import Image from "next/image";
import Link from "../../ui/Link";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={`${classes.Header} container`}>
      {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
      <div className={classes.NavWrapper}>
        <Logo />
        <nav className={classes.Nav}>
          <ul className={classes.NavList}>
            {NAV_LINKS.map(({ name, id }) => (
              <NavLink href="/" key={id} setOpen={setOpen}>
                {name}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
      <div className={classes.ContactWrapper}>
        <p>pozovite nas:</p>
        <a href="" className={classes.MediaLink}>
          <Image src="/viber.png" height={24} width={24} />
        </a>
        <a href="" className={classes.MediaLink}>
          <Image src="/whatsupp.png" height={24} width={24} />
        </a>
        <Link href="/">Kontakt</Link>
      </div>
    </header>
  );
};

export default Header;
