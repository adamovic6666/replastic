import classes from "./Redemption.module.css";
import { REDEMPTION_DETAILS } from "../../../../pageData/data";

const Redemption = () => {
  return (
    <div className={`${classes.Redemption} container`}>
      <span id="redemption"></span>

      <h3>Otkup plastike</h3>
      <div className={classes.TextContentWrapper}>
        <div>
          <p className="body-text">
            Sakupljamo i otkupljujemo otpadnu plastiku po aktuelnim tržišnim
            cenama.
          </p>
          <p className="body-text">
            Pretvorite svoj nagomilani otpad u zaradu!
          </p>
          <span>Šta sve možete da sakupljate?</span>
        </div>
      </div>
      <div className={classes.CardsWrapper}>
        {REDEMPTION_DETAILS.map(({ id, title, description, svg, type }) => {
          return (
            <div key={id} className={classes.Card}>
              <div className={classes.CardImageWrapper}>{svg}</div>
              <div className={classes.CardTextWrapper}>
                <span>{title}</span>
                <p>{type}</p>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.BottomText}>
        <p>
          <span> Minimalne količine za otkup: </span>
          200 kg jedne vrste plastičnog proizvoda.
        </p>
        <p>
          <span>Minimalne količine za otkup </span>
          <br /> 200 kg jedne vrste plastičnog proizvoda
        </p>
      </div>
    </div>
  );
};

export default Redemption;
