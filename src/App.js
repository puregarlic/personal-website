/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, Global } from '@emotion/core'
import { Flex, Heading, Box } from '@rebass/emotion'

import Header from './components/header'
import ProjectCard from './components/project-card'

import dune from './images/dune.png'
import empyrean from './images/empyrean.png'
import catsitter from './images/catsitter.png'

const projects = [
  {
    title: 'CATSITTER',
    link: 'https://puregarlic.itch.io/catsitter',
    image: catsitter
  },
  {
    title: 'DUNE',
    link: 'https://puregarlic.itch.io/dune',
    image: dune
  },
  {
    title: 'Empyrean',
    link: 'http://puregarlic.gitlab.io/Empyrean/',
    image: empyrean
  }
]

const App = () => {
  return (
    <Fragment>
      <Global
        styles={{
          body: {
            margin: '0'
          }
        }}
      />
      <Header />
      <Box px={[4, 5, 5]} my={5}>
        <Heading fontFamily="Inter UI" fontSize={[5, 6, 90]}>
          Portfolio
        </Heading>
        <Heading
          fontFamily="Inter UI"
          fontSize={[4, 5, 60]}
          my={[1, 2, 4]}
          mx={[2, 3, 4]}
          fontWeight={600}
        >
          Games
        </Heading>
        <Flex justifyContent="center" flexWrap="wrap" mt={[3, null, 4]}>
          {projects.map(project => (
            <ProjectCard {...project} key={project.title} />
          ))}
        </Flex>
      </Box>
    </Fragment>
  )
}

export default App
