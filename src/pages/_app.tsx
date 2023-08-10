import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import "mirotone/dist/styles.css";
import { MiroContextWrapper } from "~/components/MiroContext";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MiroContextWrapper>
      <Component {...pageProps} suppressHydrationWarning />
    </MiroContextWrapper>
  );
};

export default MyApp;
