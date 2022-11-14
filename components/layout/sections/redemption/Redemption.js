import classes from "./Redemption.module.css";
import Tag from "../../../ui/Tag";
import Link from "../../../ui/Link";
import { REDEMPTION_DETAILS } from "../../../../pageData/data";

const Redemption = () => {
  return (
    <div className={`${classes.Redemption} container`}>
      <Tag>Otkup</Tag>
      <h3>Otkup plastike</h3>
      <div className={classes.TextContentWrapper}>
        <div>
          <p className="body-text">
            Sakupljamo i otkupljujemo otpadnu plastiku po aktuelnim tržišnim
            cenama. Pretvorite svoj nagomilani otpad u zaradu!
          </p>
          <span>Šta sve možete da sakupljate?</span>
        </div>
        <Link href="/">Kontakt</Link>
      </div>
      <div className={classes.CardsWrapper}>
        {REDEMPTION_DETAILS.map(({ id, title, description, svg }) => {
          return (
            <div key={id} className={classes.Card}>
              <div className={classes.CardImageWrapper}>
                {svg}
                <span>0{id}</span>
              </div>
              <div className={classes.CardTextWrapper}>
                <span>{title}</span>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.BottomText}>
        <p>
          <span> Minimalne količine za otkup!</span>
          <br /> 200 kg jedne vrste plastičnog <br /> proizvoda.
        </p>
      </div>
    </div>
  );
};

export default Redemption;
