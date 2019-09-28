import { useState, useEffect } from 'react'
import { Flex, Link } from 'rebass'
import { string, node, func, bool } from 'prop-types'
import useDarkMode from 'use-dark-mode'

const IconButton = props => {
  const [hey, setHey] = useState(false)
  useEffect(() => {
    setHey(props.dark)
  }, [props.dark])

  return (
    <Link
      color={hey ? '#0f0f0f' : 'white'}
      href={props.href}
      target="_blank"
      sx={{
        textDecoration: 'none',
        lineHeight: 0,
        transition: '0.2s ease-in-out'
      }}
    >
      <Flex
        height="4rem"
        width="4rem"
        bg={hey ? 'white' : '#0f0f0f'}
        alignItems="center"
        justifyContent="center"
        onClick={props.onClick}
        sx={{ borderRadius: '100%', transition: '0.2s ease-in-out' }}
      >
        {props.children}
      </Flex>
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
