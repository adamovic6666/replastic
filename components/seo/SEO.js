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
        description="This is a demo description"
        // canonical="https://www.example.com"
        openGraph={{
          url: "https://replastic.vercel.app/",
          title: "Replastic",
          description: "Open Graph Description",
          images: [
            {
              // url: "https://www.example.com/og-image01.jpg",
              url: "https://replastic.vercel.app/about-img.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/png",
            },
            {
              // url: "https://www.example.com/og-image02.jpg",
              url: "https://replastic.vercel.app/about-img.png",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/png",
            },
            { url: "https://www.example.com/og-image03.jpg" },
            { url: "https://www.example.com/og-image04.jpg" },
          ],
          site_name: "https://replastic.vercel.app/",
        }}
      />
    </>
  );
};

export default SEO;
