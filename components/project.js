import { useState, useEffect } from 'react'
import { Flex, Link, Text } from 'rebass'
import { string, bool } from 'prop-types'
import useDarkMode from 'use-dark-mode'
import { Link2 } from 'react-feather'

const Project = props => {
  const [hey, setHey] = useState(false)
  useEffect(() => {
    setHey(props.dark)
  }, [props.dark])

  return (
    <Link
      color={hey ? 'white' : '#0f0f0f'}
      href={props.href}
      target="_blank"
      sx={{ textDecoration: 'none', lineHeight: 0 }}
    >
      <Flex
        width={1}
        mt={2}
        p={3}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          borderStyle: 'solid',
          borderWidth: '4px',
          borderColor: hey ? 'white' : '#0f0f0f',
          transition: '0.2s ease-in-out'
        }}
      >
        <Text fontSize={1}>{props.name}</Text>
        <Link2 />
      </Flex>
    </Link>
  )
}

Project.propTypes = {
  href: string,
  name: string,
  dark: bool
}

export default Project
