import { Flex, Link, Text } from 'rebass'
import { string } from 'prop-types'
import useDarkMode from 'use-dark-mode'
import { Link2 } from 'react-feather'

const Project = props => {
  const { value } = useDarkMode(false)

  return (
    <Link
      color={value ? 'white' : '#0f0f0f'}
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
          borderColor: value ? 'white' : '#0f0f0f'
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
  name: string
}

export default Project
