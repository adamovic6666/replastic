import Link from "next/link";
import Image from "next/image";
import { isWindow } from "../../utils/utils";
import classes from "./Logo.module.css";

const Logo = () => {
  const width = isWindow && window.innerWidth < 768 ? 125 : 150;
  const height = isWindow && window.innerWidth < 768 ? 26 : 31;

  return (
    <div className={classes.Logo}>
      <Link href="/">
        <Image src="/logo.png" width={width} height={height} alt="logo-image" />
      </Link>
    </div>
  );
};

export default Logo;
