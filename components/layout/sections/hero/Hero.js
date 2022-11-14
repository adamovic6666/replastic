import classes from "./Hero.module.css";
import Image from "next/image";
import PlayButton from "../../../svgs/PlayButton";

const Hero = () => {
  return (
    <div className={`${classes.Hero}`}>
      <div className={classes.HeroTopWrapper}>
        <div className={classes.HeroTextWrapper}>
          <h1>
            Otkup i <span>reciklaža plastike</span>
          </h1>
          <p className="body-text">
            <span>REPLASTIC </span>
            je jedan od lidera na polju reciklaže plastike u Srbiji. Preduzeće
            je osnovano 2008. godine i bavi se otkupom i reciklažom svih vrsta
            plastike, kao i prodajom granulisanih materijala PREMIJUM kvaliteta.
          </p>
        </div>
        <div className={classes.HeroImageTop}>
          <Image src="/hero-img-1.png" width={511} height={356} />
        </div>
      </div>
      <div className={classes.HeroBottomWrapper}>
        <div className={classes.HeroVideoWrapper}>
          <span></span>
          <PlayButton />
          <p>Pogledajte naš video</p>
        </div>
        <div className={classes.HeroBottomImagesWrapper}>
          <Image src="/hero-img-2.png" width={511} height={356} />
          <Image src="/hero-img-3.png" width={396} height={542} />
        </div>
      </div>
      <div className={classes.HeroFrame}></div>
    </div>
  );
};

export default Hero;
