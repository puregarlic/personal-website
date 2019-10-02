import { Flex, Link } from 'rebass'
import styled from '@emotion/styled'
import { string, node, func } from 'prop-types'

const IconButtonBase = styled(Flex)`
  height: 4rem;
  width: 4rem;
  border-radius: 100%;
  transition: 0.2s ease-in-out;
  color: white;
  background: #0f0f0f;

  :hover {
    color: mediumspringgreen;
    transform: scale(1.07);
  }

  .dark-mode & {
    color: #0f0f0f;
    background: white;

    :hover {
      background: mediumspringgreen;
    }
  }
`

const IconButton = props => (
  <Link
    href={props.href}
    target="_blank"
    data-tip={props.tip}
    sx={{
      textDecoration: 'none',
      lineHeight: 0
    }}
  >
    <IconButtonBase
      alignItems="center"
      justifyContent="center"
      onClick={props.onClick}
    >
      {props.children}
    </IconButtonBase>
  </Link>
)

IconButton.propTypes = {
  href: string,
  children: node,
  onClick: func,
  tip: string
}

export default IconButton
