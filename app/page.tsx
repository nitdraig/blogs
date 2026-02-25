import Script from "next/script";
import { getLocale } from "@/lib/locale";
import IndexView from "./views/IndexView/IndexView";

export default async function Home() {
  const locale = await getLocale();

  return (
    <main className="px-6 mx-auto">
      {process.env.NEXT_PUBLIC_GOOGLEANALYTIC && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLEANALYTIC}`}
          />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLEANALYTIC}');
            `}
          </Script>
        </>
      )}
      <IndexView locale={locale} />
    </main>
  );
}
