import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.About}>
      <div className={classes.AboutFrame}></div>

      <span id="about"></span>
      <h3>replastic</h3>
      <div className={classes.TextWrapper}>
        <p className="body-text">
          U REPLASTIC reciklažnom pogonu svi materijali prolaze niz bezednosnih
          provera i apsolutno su neškodljivi po ljudsko zdravlje. Naš reciklažni
          centar poseduje sve odgovarajuće licence i dozvole, a takođe ispunjava
          i sve zakonom propisane uslove za upravljanje plastičnim otpadom.
        </p>
        <p className="body-text">
          Naš tim je izuzetno posvećen svim tehničko-tehnološkim procesima u
          proizvodnji i sa sigurnošću možemo da garantujemo za ispravnost svih
          naših proizvoda. U proizvodnji posedujemo šreder, mašine za mlevenje,
          aglomerator i ekstruder. Takođe vršimo i uslužno prerađivanje
          plastike.
        </p>
      </div>
      <div className={classes.VideoWrapper}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/6jQ7y_qQYUA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default About;
