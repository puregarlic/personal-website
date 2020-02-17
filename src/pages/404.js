import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Shoot, that's not right</h1>
    <p>Doesn't look like there's a page at this route.</p>
  </Layout>
)

export default NotFoundPage
