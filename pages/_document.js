import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:500,700&display=swap"
            rel="stylesheet"
          ></link>
          <style>
            {`
              body {
                margin: 0;
                font-family: Poppins, -apple-system, sans-serif;
                font-size: 20px;
                transition: 0.3s ease-in-out;
              }

              body.light-mode {
                color: #0f0f0f;
              }

              body.dark-mode {
                color: white;
                background: #0f0f0f;
              }

              ::selection {
                color: #0f0f0f;
                background: mediumspringgreen;
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    )
  }
}

export default MyDocument
