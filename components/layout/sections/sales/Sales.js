import classes from "./Sales.module.css";
import Image from "next/image";
import { isWindow } from "../../../../utils/utils";

const Sales = () => {
  const width =
    isWindow && window.innerWidth < 768 ? window.innerWidth - 32 : 406;
  const height = 286;

  return (
    <div className={`${classes.Sales} container`}>
      <span id="regranulat"></span>
      <h3>Prodaja regranulata</h3>
      <p>
        Proizvodimo i prodajemo premijum regranulate plastike po najboljim
        cenama. U svakom trenutku u našim magacinima nalaze se reciklirani
        regranulati visokog kvaliteta, i u raznim bojama, spremni za ponovnu
        upotrebu u vašoj proizvodnji.
      </p>
      <div>
        <Image
          width={width}
          height={height}
          src="/sales-img-1.png"
          alt="regranulat-image"
        />
        <Image
          width={width}
          height={height}
          src="/sales-img-2.png"
          alt="regranulat-image"
        />
        <Image
          width={width}
          height={height}
          src="/sales-img-3.png"
          alt="regranulat-image"
        />
      </div>
    </div>
  );
};

export default Sales;
