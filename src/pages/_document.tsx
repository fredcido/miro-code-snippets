import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="App powering Miro Code Snippets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src={process.env.NEXT_PUBLIC_MIRO_SDK}
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  );
}
