import classes from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className="container">
        <p>Replastic d.o.o. 2022 © Sva prava zadržana.</p>
        <Link href="/privacy-policy">Politika privatnosti</Link>
      </div>
    </footer>
  );
};

export default Footer;
