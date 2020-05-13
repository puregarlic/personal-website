import React from "react"
import { Heading, Text } from "rebass"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import { InternalLink } from "../../components/links"

export default function ConfirmSubscriptionPage() {
  return (
    <Layout referredFrom={{ page: "Home", path: "/" }}>
      <SEO title="Please Confirm Your Email" />
      <Heading fontSize={8} fontWeight={900} mb={5} lineHeight={1.2}>
        Fantastic!
      </Heading>
      <Text mb={3} textAlign="justify">
        <b>You did it!</b> You're all confirmed and ready to go.
      </Text>
      <Text>
        Thanks again for subscribing to my newsletter! If you're up for it,
        until the next time I send out an update, you can{" "}
        <InternalLink to="/">poke around the rest of the site.</InternalLink>
      </Text>
    </Layout>
  )
}
