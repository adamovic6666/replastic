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
        canonical="https://replastic.rs"
        openGraph={{
          url: "https://replastic.rs",
          title: "REPLASTIC | Otkup i reciklaža plastike",
          description:
            "Savremeni sertifikovani reciklažni centar za otkup i reciklažu plastike. Prodaja premijum regranulata po najboljim cenama",
          images: [
            {
              url: "https://replastic.rs/og-image.jpg",
              width: 800,
              height: 600,
              alt: "og-image",
              type: "image/jpg",
            },
          ],
          site_name: "https://replastic.rs",
        }}
      />
    </>
  );
};

export default SEO;
