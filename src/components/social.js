/** @jsx jsx*/
import posed from 'react-pose'
import { jsx } from '@emotion/core'
import { Flex, Link } from '@rebass/emotion'
import { Code, GitHub, Linkedin, Twitter, Archive } from 'react-feather'

const SocialButton = posed(Flex)({
  hoverable: true,
  pressable: true,
  init: {
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  },
  press: {
    scale: 1.03,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
})

const socialLinks = [
  {
    alt: 'Twitter',
    link: 'https://twitter.com/puregarlic_',
    Icon: Twitter
  },
  {
    alt: 'GitHub',
    link: 'https://github.com/puregarlic',
    Icon: GitHub
  },
  {
    alt: 'LinkedIn',
    link: 'https://www.linkedin.com/in/graham-barber/',
    Icon: Linkedin
  },
  {
    alt: 'Resumé',
    link: 'https://standardresume.co/r/grahambarber',
    Icon: Archive
  },
  {
    alt: 'Source',
    link: 'https://github.com/puregarlic/personal-website',
    Icon: Code
  }
]

const SocialIcons = () => (
  <Flex
    bg="#dbff33"
    alignItems="center"
    justifyContent="flex-end"
    css={{ height: '20vh' }}
    p={[4, 5, 5]}
  >
    {socialLinks.map(({ alt, link, Icon }) => (
      <Link href={link} key={alt}>
        <SocialButton
          bg="white"
          m={1}
          justifyContent="center"
          alignItems="center"
          css={{ borderRadius: '50%', width: '50px', height: '50px' }}
        >
          <Icon color="black" />
        </SocialButton>
      </Link>
    ))}
  </Flex>
)

export default SocialIcons
