import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import Script from 'next/script';
import { ThemeProvider } from 'styled-components';
import SEO from '@/seo.config';
import GlobalStyle from '@/styles/global-style';
import { theme } from '@/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {/** SEO */}
        <DefaultSeo {...SEO} />
        {/** GA https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-293TKKQ748`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-293TKKQ748');
          `,
          }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
