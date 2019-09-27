import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link
      href="https://fonts.googleapis.com/css?family=Poppins:500,700&display=swap"
      rel="stylesheet"
    ></link>
    <style jsx global>
      {`
        body {
          margin: 0;
          font-family: 'Poppins', -apple-system, sans-serif;
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
          background: rgb(219, 255, 51);
        }
      `}
    </style>
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
