import Script from "next/script";
import IndexView from "./views/IndexView/IndexView";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-RR6M6KD3ZP" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RR6M6KD3ZP');
                  `}
      </Script>
      <IndexView />
    </main>
  );
}
