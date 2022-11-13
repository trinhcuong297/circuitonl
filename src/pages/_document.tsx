import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <title>Online simulator circuit</title>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta />
          <meta
            name="google-site-verification"
            content="K_pPeGKApk94IcoK4yBsUlZo2qbRkuDENbxfu6WOVp4"
          />
          <meta name="description" content="Simple online simulator circuit" />
          <meta name="geo.region" content="VN-HN" />
          <meta name="geo.placename" content="Hanoi" />
          <meta name="geo.position" content="21.004296;105.843723" />
          <meta name="ICBM" content="21.004296, 105.843723" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
