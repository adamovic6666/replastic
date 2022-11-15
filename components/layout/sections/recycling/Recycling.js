import classes from "./Recycling.module.css";
import Image from "next/image";
import { isWindow } from "../../../../utils/utils";

const Recycling = () => {
  const width =
    isWindow && window.innerWidth < 768 ? window.innerWidth - 32 : 721;

  return (
    <div className={`${classes.Recycling} container`}>
      <span id="recycling"></span>
      <div>
        <h3>Reciklaža plastike</h3>
        <div className={classes.TextContent}>
          <p>
            Replastic predstavlja savremeni sertifikovani reciklažni centar koji
            Vam obezbeđuje svu potrebnu dokumentaciju o kretanju otpada.
          </p>
          <p>
            Reciklaža plastike predstavlja izdvajanje i razvrstavanje plastičnih
            materijala iz otpada i njegovo ponovno korišćenje. Sa nama možete
            biti sigurni da će otpad biti recikliran na pravilan način, uz
            poštovanje svih ekoloških propisa, a materijali sadržani u njemu
            preusmereni u novi ciklus proizvodnje.
          </p>
          <p>
            Naša fabrika je opremljena specijalizovanim linijama za reciklažu
            plastike, gde se plastika reciklira i pretvara u prečišćen i
            precizno sortiran plastični granulat, sirovinu spremnu za ponovnu
            upotrebu, odnosno izradu novih proizvoda od reciklirane plastike.
          </p>
        </div>
      </div>
      <div>
        <Image
          src="/about-img.png"
          width={width}
          height={442}
          alt="plastic-recycle-image"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Recycling;
