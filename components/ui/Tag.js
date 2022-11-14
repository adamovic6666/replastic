import classes from "./Tag.module.css";

const Tag = ({ children }) => {
  return <span className={classes.Tag}>{children}</span>;
};

export default Tag;
