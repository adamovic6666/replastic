import classes from "./Recycling.module.css";
import Tag from "../../../ui/Tag";
import Image from "next/image";

const Recycling = () => {
  return (
    <div className={`${classes.Recycling} container`}>
      <div>
        <Tag>reciklaža</Tag>
        <h3>Reciklaža plastike</h3>
        <div className={classes.TextContent}>
          <p>
            Obezbeđujemo svu potrebnu dokumentaciju o kretanju otpada. Savremeni
            sertifikovani reciklažni centar.
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
        <Image src="/recycle-img.png" width={721} height={442} />
      </div>
    </div>
  );
};

export default Recycling;
