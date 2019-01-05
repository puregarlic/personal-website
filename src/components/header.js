/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ChevronDown } from 'react-feather'
import { Flex, Heading, Text } from '@rebass/emotion'

import Highlight from './highlight'

const Header = () => (
  <Flex
    width={1}
    css={{ height: '100vh' }}
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
      <ChevronDown size={32} />
    </Flex>
  </Flex>
)

export default Header
