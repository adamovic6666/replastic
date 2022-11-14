import Tag from "../../../ui/Tag";
import classes from "./Sales.module.css";
import Image from "next/image";

const Sales = () => {
  return (
    <div className={`${classes.Sales} container`}>
      <Tag>regranulati</Tag>
      <h3>Prodaja regranulata</h3>
      <p>Proizvodimo i prodajemo premijum regranulate po najboljim cenama</p>
      <div>
        <Image width={406} height={286} src="/sales-img-1.png" />
        <Image width={406} height={286} src="/sales-img-2.png" />
        <Image width={406} height={286} src="/sales-img-3.png" />
      </div>
    </div>
  );
};

export default Sales;
