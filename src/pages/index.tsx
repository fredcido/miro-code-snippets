import Head from "next/head";
import { useEffect } from "react";
import { init } from "~/miro";

export default function Home() {
  useEffect(() => {
    init().catch(console.error);
  }, []);
  return (
    <>
      <Head>
        <title>Miro Code Snippets</title>
      </Head>
      <main>
        <h1>You are at the headless iframe!</h1>
      </main>
    </>
  );
}
