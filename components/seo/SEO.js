import { NextSeo } from "next-seo";
import Head from "next/head";
const SEO = ({ metaTitle }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <NextSeo
        title={metaTitle}
        description="Savremeni sertifikovani reciklažni centar za otkup i reciklažu plastike. Prodaja premijum regranulata po najboljim cenama"
        canonical="https://replastic.vercel.app/"
        openGraph={{
          url: "https://replastic.vercel.app/",
          title: "REPLASTIC | Otkup i reciklaža plastike",
          description:
            "Savremeni sertifikovani reciklažni centar za otkup i reciklažu plastike. Prodaja premijum regranulata po najboljim cenama",
          images: [
            {
              url: "https://replastic.vercel.app/about-img.png",
              width: 800,
              height: 600,
              alt: "og-image",
              type: "image/png",
            },
            {
              url: "https://replastic.vercel.app/about-img.png",
              width: 900,
              height: 800,
              alt: "og-image-2",
              type: "image/png",
            },
          ],
          site_name: "https://replastic.rs",
        }}
      />
    </>
  );
};

export default SEO;
