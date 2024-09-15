import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head> 
        {/* Vous pouvez également ajouter d'autres formats de favicon si nécessaire */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icon32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon16.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
