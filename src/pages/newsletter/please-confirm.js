import React from "react"
import { Heading, Text } from "rebass"

import SEO from "../../components/seo"
import Layout from "../../components/layout"

export default function ConfirmSubscriptionPage() {
  return (
    <Layout referredFrom={{ page: "Home", path: "/" }}>
      <SEO title="Please Confirm Your Email" />
      <Heading fontSize={8} fontWeight={900} mb={5} lineHeight={1.2}>
        Awesome!
      </Heading>
      <Text mb={3} textAlign="justify">
        Thanks a bunch for subscribing! Unfortunately, due to the ever-present
        threat of robots subscribing to my newsletter—who may skew my analytics
        and propel us far past my subscriber limit—I must request that you{" "}
        <b>please confirm your email.</b>
      </Text>
      <Text textAlign="justify">
        You'll find a confirmation email in your inbox. If you've received it,
        open it up and click on the confirmation link enclosed. If it hasn't
        already arrived, it should be there soon; you'll just have to be a
        little more patient.
      </Text>
    </Layout>
  )
}
