import { Flex, Link } from 'rebass'
import { string, node, func } from 'prop-types'
import useDarkMode from 'use-dark-mode'

const IconButton = props => {
  const { value } = useDarkMode(false)

  return (
    <Link
      color={value ? '#0f0f0f' : 'white'}
      href={props.href}
      target="_blank"
      sx={{ textDecoration: 'none', lineHeight: 0 }}
    >
      <Flex
        height="4rem"
        width="4rem"
        bg={value ? 'white' : '#0f0f0f'}
        alignItems="center"
        justifyContent="center"
        onClick={props.onClick}
        sx={{ borderRadius: '100%' }}
      >
        {props.children}
      </Flex>
    </Link>
  )
}

IconButton.propTypes = {
  href: string,
  children: node,
  onClick: func
}

export default IconButton
