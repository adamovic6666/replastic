import SEO from "../seo/SEO";
import Hero from "../layout/sections/hero/Hero";
import About from "../layout/sections/about/About";
import Redemption from "../layout/sections/redemption/Redemption";
import Recycling from "../layout/sections/recycling/Recycling";
import Sales from "../layout/sections/sales/Sales";
import Contact from "../layout/sections/contact/Contact";
import Informations from "../layout/sections/informations/Informations";

const Homepage = () => {
  return (
    <>
      <SEO metaTitle="REPLASTIC | Otkup i reciklaža plastike" />
      <Hero />
      <About />
      <Redemption />
      <Informations />
      <Recycling />
      <Sales />
      <Contact />
    </>
  );
};

export default Homepage;
