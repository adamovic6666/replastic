import classes from "./About.module.css";
import Image from "next/image";
import Tag from "../../../ui/Tag";
import VideoPlayButton from "../../../svgs/VideoPlayButton";

const About = () => {
  return (
    <div className={classes.About}>
      <Tag>o nama</Tag>
      <h3>replastic</h3>
      <div className={classes.TextWrapper}>
        <p className="body-text">
          U REPLASTIC reciklažnom pogonu svi materijali prolaze niz bezednosnih
          provera i apsolutno su neškodljivi po ljudsko zdravlje. Naš reciklažni
          centar poseduje sve odgovarajuće licence i dozvole, a takođe ispunjava
          i sve zakonom propisane uslove za upravljanje plastičnim otpadom.
        </p>
        <p className="body-text">
          Naš tim je izuzetno posvećen svim tehničko-tehnoloških procesima u
          proizvodnji i sa sigurnošću možemo da garantujemo za ispravnost svih
          naših proizvoda. U proizvodnji posedujemo šreder, mašine za mlevenje,
          aglomerator, ekstruder i vršimo uslužno prerađivanje plastike.
        </p>
      </div>
      <div className={classes.ImageWrapper}>
        <Image src="/about-img.png" layout="fill" />
        <VideoPlayButton />
      </div>
      <div className={classes.AboutFrame}></div>
    </div>
  );
};

export default About;
