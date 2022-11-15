import classes from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className="container">
        <p>Replastic d.o.o. © Sva prava zadržana.</p>
        <p>2022</p>
        <Link href="/">Politika privatnosti</Link>
      </div>
    </footer>
  );
};

export default Footer;
