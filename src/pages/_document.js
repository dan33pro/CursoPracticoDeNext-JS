import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document{
    render() {
        return (
            <Html lang="en">
                <Head>
                    <title>React:Shop</title>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-C689L541VP"></script>
                    <script dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-C689L541VP');`
                    }} />
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