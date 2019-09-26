import { Flex, Link } from 'rebass'
import { string, node, func } from 'prop-types'

const IconButton = props => {
  return (
    <Flex
      m={1}
      height="5rem"
      width="5rem"
      bg="#0f0f0f"
      alignItems="center"
      justifyContent="center"
      onClick={props.onClick}
      sx={{ borderRadius: '100%' }}
    >
      <Link
        color="white"
        href={props.href}
        target="_blank"
        sx={{ textDecoration: 'none', lineHeight: 0 }}
      >
        {props.children}
      </Link>
    </Flex>
  )
}

IconButton.propTypes = {
  href: string,
  children: node,
  onClick: func
}

export default IconButton
