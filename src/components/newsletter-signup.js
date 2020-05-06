/** @jsx jsx */
import { jsx, Box, Label, Input, Button } from "theme-ui"

export default function NewsletterSignup() {
  return (
    <Box
      as="form"
      action="https://buttondown.email/api/emails/embed-subscribe/puregarlic"
      method="post"
      target="popupwindow"
      onsubmit="window.open('https://buttondown.email/puregarlic', 'popupwindow')"
    >
      <Label htmlFor="bd-email">Your Email</Label>
      <Input
        mb={3}
        type="email"
        name="email"
        id="bd-email"
        placeholder="example@example.com"
        required
      />
      <input type="hidden" value="1" name="embed" />
      <Button sx={{ width: "100%" }}>Subscribe</Button>
    </Box>
  )
}
