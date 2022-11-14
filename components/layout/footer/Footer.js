import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className="container">
        <p>all rights reserved @replastic</p>
        <p>2022</p>
        <div className={classes.FooterFrame}></div>
      </div>
    </footer>
  );
};

export default Footer;
