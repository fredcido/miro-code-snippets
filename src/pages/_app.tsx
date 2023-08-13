import { useRouter } from "next/router";
import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import "mirotone/dist/styles.css";
import { MiroContextWrapper } from "~/components/MiroContext";
import { SnippetFormSkeleton } from "~/components/Skeleton/SnippetFormSkeleton";
import { ListSnippetsSkeleton } from "~/components/Skeleton/ListSnippetsSkeleton";

const MyApp: AppType = ({ Component, pageProps }) => {
  const { pathname } = useRouter();
  const fallback = pathname.includes("code-editor") ? (
    <SnippetFormSkeleton />
  ) : (
    <ListSnippetsSkeleton />
  );
  return (
    <MiroContextWrapper fallback={fallback}>
      <Component {...pageProps} suppressHydrationWarning />
    </MiroContextWrapper>
  );
};

export default MyApp;
