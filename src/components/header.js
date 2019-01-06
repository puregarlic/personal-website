/** @jsx jsx */
import posed from 'react-pose'
import { jsx } from '@emotion/core'
import { ChevronDown } from 'react-feather'
import { Flex, Heading, Text } from '@rebass/emotion'

import SocialIcons from './social'
import Highlight from './highlight'
import ProfilePicture from './profile'

const Indicator = posed.div({
  exit: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 1100,
      flip: Infinity
    }
  }
})

const Header = () => (
  <Flex
    width={1}
    css={{ height: '80vh' }}
    justifyContent="flex-end"
    flexDirection="column"
    bg="#dbff33"
    px={[4, 5, 5]}
  >
    <Heading fontFamily="Inter UI" fontSize={[8, null, 150]} mx={[0, 4, 0]}>
      Heya.
    </Heading>
    <Text fontFamily="Inter UI" fontSize={[4, 5, 6]} fontWeight={600} mt={4} mx={[0, 5, 4]}>
      Nice to see you. My name is <Highlight>Graham Barber</Highlight>.
    </Text>
    <Flex width={1} justifyContent="center" my={4}>
      <Indicator initialPose="exit" pose="enter">
        <ChevronDown size={40} />
      </Indicator>
    </Flex>
  </Flex>
)

export default Header
