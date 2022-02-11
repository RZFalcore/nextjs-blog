import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log(`script loaded correctly, window.FB has been populated`);
          console.log(window.FB);
        }}
      />
      <h1>First post</h1>
      <h2>
        <Link href="/">
          <a>Back to home page</a>
        </Link>
      </h2>
    </>
  );
}
