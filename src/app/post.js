import Head from 'next/head';

export default function Post() {
  return (
    <>
      <Head>
        <title>Best SEO Practices in 2025</title>
        <meta name="description" content="Learn top SEO techniques to boost visibility and performance in 2025." />

        {/* Open Graph (for social media) */}
        <meta property="og:title" content="Best SEO Practices in 2025" />
        <meta property="og:description" content="Learn top SEO techniques to boost visibility and performance in 2025." />
        <meta property="og:image" content="https://your-site.com/seo-thumbnail.jpg" />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best SEO Practices in 2025" />
        <meta name="twitter:description" content="Top tips to improve your site's visibility." />
        <meta name="twitter:image" content="https://your-site.com/seo-thumbnail.jpg" />
      </Head>

      <main>
        <h1>Best SEO Practices in 2025</h1>
        <p>This article covers the top SEO strategies to improve your website's ranking...</p>
      </main>
    </>
  );
}
