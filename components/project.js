import styled from '@emotion/styled'
import { Link2 } from 'react-feather'
import { string, bool } from 'prop-types'
import { Flex, Link, Text } from 'rebass'

const ProjectBase = styled(Flex)`
  width: 100%;
  border-style: solid;
  border-width: 4px;
  transition: 0.2s ease-in-out;
  color: #0f0f0f;
  border-color: #0f0f0f;

  :hover {
    background: mediumspringgreen;
  }

  .dark-mode & {
    color: white;
    border-color: white;

    :hover {
      color: #0f0f0f;
      border-color: mediumspringgreen;
    }
  }
`

const Project = props => (
  <Link
    href={props.href}
    target="_blank"
    sx={{ textDecoration: 'none', lineHeight: 0 }}
  >
    <ProjectBase
      mt={2}
      p={3}
      alignItems="center"
      justifyContent="space-between"
    >
      <Text fontSize={1}>{props.name}</Text>
      <Link2 />
    </ProjectBase>
  </Link>
)

Project.propTypes = {
  href: string,
  name: string,
  dark: bool
}

export default Project
