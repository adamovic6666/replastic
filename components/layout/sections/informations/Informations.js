import classes from "./Informations.module.css";
import Image from "next/image";

const Informations = () => {
  return (
    <div className={`${classes.InformationsWrapper} container`}>
      <div className={classes.BubbleImage}>
        <Image src="/bubble.png" width={336} height={292} alt="bubble-image" />
      </div>
      <div className={classes.Informations}>
        <div>
          <h3>Pišite nam na Viber ili WhatsApp</h3>
          <p>
            Pošaljite nam slike i sve raspoložive informacije o otkupnom
            otpadnom materijalu i javićemo Vam se u najkraćem roku.
          </p>
          <div className={classes.LinksWrapper}>
            <a href="viber://chat?number=063387954" className={classes.Link}>
              <Image
                src="/viber.png"
                height={24}
                width={24}
                alt="viber-image"
              />
              <span>whatsapp</span>
            </a>
            <a href="https://wa.me/063387954" className={classes.Link}>
              <Image
                src="/whatsupp.png"
                height={24}
                width={24}
                alt="whatsapp-image"
              />
              <span>viber</span>
            </a>
          </div>
        </div>
        <div className={classes.BubbleMobile}>
          <Image
            src="/bubble.png"
            alt="bubble-image"
            width={200}
            height={200}
            layout="responsive"
          />
        </div>

        <div className={classes.Frame}>
          <Image
            src="/info-frame.png"
            width={540}
            height={540}
            alt="info-frame"
          />
        </div>
      </div>
    </div>
  );
};

export default Informations;
