import Tag from "../../../ui/Tag";
import classes from "./Contact.module.css";
import Image from "next/image";
import Link from "next/link";
import Location from "../../../svgs/Location";
import Clock from "../../../svgs/Clock";
import Telephone from "../../../svgs/Telephone";
import Android from "../../../svgs/Android";
import Email from "../../../svgs/Email";
const Contact = () => {
  return (
    <div className={`${classes.ContactWrapper} container`}>
      <div className={classes.BubbleImage}>
        <Image src="/bubble.png" width={336} height={292} />
      </div>
      <div className={classes.Informations}>
        <div>
          <Tag>informacije</Tag>
          <h3>Pišite nam na Viber ili WhatsApp</h3>
          <p>
            Pošaljite nam slike i informacije o otkupnom otpadnom materijalu i
            javićemo Vam se u najkraćem roku.
          </p>
          <div className={classes.LinksWrapper}>
            <Link href="/" className={classes.Link}>
              <Image src="/viber.png" height={24} width={24} />
              <span>whatsapp</span>
            </Link>
            <Link href="/" className={classes.Link}>
              <Image src="/whatsupp.png" height={24} width={24} />
              <span>viber</span>
            </Link>
          </div>
        </div>

        <div className={classes.Frame}>
          <Image src="/info-frame.png" width={540} height={540} />
        </div>
      </div>
      <div className={classes.Contact}>
        <div className={classes.DetailsWrapper}>
          <h3>Kontakt</h3>
          <div className={classes.Details}>
            <div className={classes.DetailsColumn}>
              <div className={classes.DetailWrapper}>
                <Location />
                <div>
                  <p> Replastic d.o.o</p>
                  <p>Severoistočna radna zona bbBlok 11 - Pinc 222320 Inđija</p>
                </div>
              </div>
              <div className={classes.DetailWrapper}>
                <Clock />
                <div>
                  <div>
                    <p> Ponedeljak - Petak:</p>
                    <p> 07:00 - 15:00h</p>
                  </div>
                  <div>
                    <p> Subota:</p>
                    <p> 07:00 - 14:00h</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.DetailsColumn}>
              <div className={classes.DetailWrapper}>
                <Telephone />
                <div>
                  <p> Kancelarija</p>
                  <p>022 560 294</p>
                </div>
              </div>
              <div className={classes.DetailWrapper}>
                <Android />
                <div>
                  <p> Farid Safargaliev</p>
                  <p>060 70 777 19</p>
                </div>
              </div>
              <div className={classes.DetailWrapper}>
                <Android />
                <div>
                  <p> Milen Nikolić</p>
                  <p>063 387 954</p>
                </div>
              </div>
              <div className={classes.DetailWrapper}>
                <Email />
                <div>
                  <p> Email</p>
                  <p>info@replastic.rs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.Map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11273.532129614543!2d20.0920744!3d45.0577405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd4553a4636e7c965!2sReplastic!5e0!3m2!1ssr!2srs!4v1668447409804!5m2!1ssr!2srs"
            width={600}
            height={450}
            style={{ border: "0px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={classes.ContactFrame}></div>
      </div>
    </div>
  );
};

export default Contact;
