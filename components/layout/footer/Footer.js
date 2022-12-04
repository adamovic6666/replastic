import classes from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className="container">
        <p>REPLASTIC D.O.O. 2022 © SVA PRAVA ZADRŽANA. </p>
        <Link href="/politika-privatnosti">Politika privatnosti</Link>
      </div>
    </footer>
  );
};

export default Footer;
