import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>{pageTitle && `${pageTitle}`}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="description"
        content="Profecta Perdana as one of the companies engaged in retail and wholesale trade of automotive spare parts and accessories, is here to assist the community in obtaining the best quality batteries and tires."
      />
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/logo-proper.png" />
    </Head>
  </>
);

export default SEO;
