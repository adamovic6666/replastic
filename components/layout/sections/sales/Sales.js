import classes from "./Sales.module.css";
import Image from "next/image";

const Sales = () => {
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
      <div className={classes.ImagesWrapper}>
        <div>
          <Image
            width={406}
            height={286}
            src="/sales-img-1.png"
            alt="regranulat-image"
            layout="responsive"
          />
        </div>
        <div>
          <Image
            width={406}
            height={286}
            src="/sales-img-2.png"
            alt="regranulat-image"
            layout="responsive"
          />
        </div>
        <div>
          <Image
            width={406}
            height={286}
            src="/sales-img-3.png"
            alt="regranulat-image"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Sales;
