import React from 'react'
import { Flex, Box, Text, Heading } from 'rebass'
import {
  Twitter,
  GitHub,
  Linkedin,
  List,
  BookOpen,
  Code,
  Monitor,
  Sun,
  Moon,
  Link2
} from 'react-feather'
import useDarkMode from 'use-dark-mode'

import Head from '../components/head'
import Nav from '../components/nav'
import IconButton from '../components/icon-button'
import Project from '../components/project'

const Home = () => {
  const { value, toggle } = useDarkMode(false)

  return (
    <div>
      <Head title="Home" />
      <Flex width={1} justifyContent="center" alignItems="center">
        <Box
          p="5rem"
          sx={{
            width: '100vw',
            maxWidth: '1920px',
            maxHeight: '1080px',
            display: 'grid',
            height: '100vh',
            gridTemplateAreas: "'name . budget' 'bio . links'",
            gridTemplateColumns: '800px 1fr 25rem',
            gridTemplateRows: ' 1fr max-content'
          }}
        >
          <Box
            sx={{
              gridArea: 'name',
              fontSize: '10rem',
              fontWeight: 700,
              lineHeight: 0.9
            }}
          >
            Graham Barber
          </Box>
          <Box sx={{ gridArea: 'budget' }}>
            <Heading
              mb={3}
              fontFamily="Poppins, -apple-system, sans-serif"
              fontSize="1.5rem"
            >
              Side Project Budget
            </Heading>
            <Project name="Personal website" href="https://graham.now.sh" />
            <Project name="Round" href="https://github.com/dotmap/round" />
          </Box>
          <Box sx={{ gridArea: 'bio' }}>
            <Text mb={3}>
              I'm a web developer, DevOps engineer, and JavaScript enthusiast.
              Currently, I am pursuing an undergraduate degree in business
              management from Oregon State University.
            </Text>
            <Text>
              My passions include improving development processes, development
              workflow automation, and using cutting-edge web technologies.
            </Text>
          </Box>
          <Box
            sx={{
              gridArea: 'links',
              display: 'grid',
              alignContent: 'flex-end',
              justifyContent: 'flex-end',
              gap: '12px',
              gridTemplateColumns: 'repeat(4, max-content)'
            }}
          >
            <IconButton>
              <BookOpen size={32} />
            </IconButton>
            <IconButton href="https://standardresume.co/r/grahambarber">
              <List size={32} />
            </IconButton>
            <IconButton href="https://github.com/puregarlic/personal-website">
              <Code size={32} />
            </IconButton>
            <IconButton onClick={toggle}>
              {value ? <Sun size={32} /> : <Moon size={32} />}
            </IconButton>
            <IconButton href="https://twitter.com/puregarlic_">
              <Twitter size={32} />
            </IconButton>
            <IconButton href="https://github.com/puregarlic">
              <GitHub size={32} />
            </IconButton>
            <IconButton href="https://puregarlic.itch.io">
              <Monitor size={32} />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/graham-barber/">
              <Linkedin size={32} />
            </IconButton>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Home
