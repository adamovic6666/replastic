import classes from "./Contact.module.css";
import Location from "../../../svgs/Location";
import Clock from "../../../svgs/Clock";
import Telephone from "../../../svgs/Telephone";
import Android from "../../../svgs/Android";
import Email from "../../../svgs/Email";
const Contact = () => {
  return (
    <div className={`${classes.ContactWrapper}`}>
      <div className={classes.ContactFrame}></div>

      <span id="contact"></span>
      <div className={`${classes.Contact} container`}>
        <div className={classes.DetailsWrapper}>
          <h3>Kontakt</h3>
          <div className={classes.Details}>
            <div className={classes.DetailsColumn}>
              <div className={classes.DetailWrapper}>
                <Location />
                <div>
                  <p>Replastic d.o.o</p>
                  <p>
                    Severoistočna radna zona bb <br />
                    Blok 11 - Pinc 2 <br />
                    22320 Inđija
                  </p>
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
                  <a className={classes.DetailLink} href="tel:+381022560294">
                    <p>022 560 294</p>
                  </a>
                </div>
              </div>
              <div className={classes.DetailWrapper}>
                <Android />
                <div>
                  <p> Farid Safargaliev</p>
                  <a className={classes.DetailLink} href="tel:+3810607077719">
                    <p>022 560 294</p>
                  </a>
                </div>
              </div>
              <div className={classes.DetailWrapper}>
                <Android />
                <div>
                  <p> Milen Nikolić</p>
                  <a className={classes.DetailLink} href="tel:+381063387954">
                    <p>022 560 294</p>
                  </a>
                </div>
              </div>
              <div className={classes.DetailWrapper}>
                <Email />
                <div>
                  <p> Email</p>
                  <a
                    className={classes.DetailLink}
                    href="mailto:info@replastic.rs"
                  >
                    <p>info@replastic.rs</p>
                  </a>
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
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
