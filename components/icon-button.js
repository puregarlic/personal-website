import { useState, useEffect } from 'react'
import { Flex, Link } from 'rebass'
import { string, node, func, bool } from 'prop-types'
import useDarkMode from 'use-dark-mode'
import styled from '@emotion/styled'

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

const IconButton = props => {
  const [hey, setHey] = useState(false)
  useEffect(() => {
    setHey(props.dark)
  }, [props.dark])

  return (
    <Link
      href={props.href}
      target="_blank"
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
}

IconButton.propTypes = {
  href: string,
  children: node,
  onClick: func,
  dark: bool
}

export default IconButton
