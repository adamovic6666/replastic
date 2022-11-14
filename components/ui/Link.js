import NextLink from "next/link";
import classes from "./Link.module.css";

const Link = ({ href, children }) => (
  <NextLink href={href}>
    <div className={classes.Link}> {children}</div>
  </NextLink>
);

export default Link;
