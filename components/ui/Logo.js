import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image src="/logo.png" width={150} height={31} />
      </Link>
    </div>
  );
};

export default Logo;
