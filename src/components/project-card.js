/** @jsx jsx */
import posed from 'react-pose'
import { jsx } from '@emotion/core'
import { string } from 'prop-types'
import { Link, Heading, Card, Flex } from '@rebass/emotion'

import Highlight from './highlight'

const BackgroundCard = posed(Card)({
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

const Shade = posed(Flex)({
  hoverable: true,
  init: {
    opacity: 0,
    background: '#dbff33'
  },
  hover: {
    opacity: 1
  }
})

const ProjectCard = ({ title, link, image }) => (
  <Link href={link} key={title} css={{ textDecoration: 'none' }}>
    <BackgroundCard
      // border="8px solid black"
      borderRadius={7}
      m={3}
      bg="#dbff33"
      backgroundImage={`url(${image})`}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Shade
        justifyContent="center"
        alignItems="center"
        css={{ height: '200px', minWidth: '350px' }}
      >
        <Heading color="black" fontFamily="Inter UI" fontWeight={600} textAlign="center">
          <Highlight as="span">{title}</Highlight>
        </Heading>
      </Shade>
    </BackgroundCard>
  </Link>
)

ProjectCard.propTypes = {
  title: string,
  link: string,
  image: string
}

export default ProjectCard
