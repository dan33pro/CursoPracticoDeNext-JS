import Document, { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet='utf-8' />
          <Link rel='manifest' href='/manifest.json' />
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
