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
      <Flex
        width={1}
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            border: '4px solid mediumspringgreen',
            width: '100vw',
            maxWidth: '1440px',
            maxHeight: '800px',
            height: '100vh'
          }}
        >
          <Box
            height="100%"
            width="100%"
            p="4rem"
            sx={{
              display: 'grid',
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
              <Project
                name="Personal website"
                href="https://graham.now.sh"
                dark={value}
              />
              <Project
                name="Round"
                href="https://github.com/dotmap/round"
                dark={value}
              />
            </Box>
            <Box sx={{ gridArea: 'bio' }}>
              <Text mb={3}>
                I'm a web developer, DevOps engineer, and JavaScript enthusiast.
                Currently, I'm pursuing an undergraduate degree in business
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
              <IconButton dark={value}>
                <BookOpen size={32} />
              </IconButton>
              <IconButton
                dark={value}
                href="https://standardresume.co/r/grahambarber"
              >
                <List size={32} />
              </IconButton>
              <IconButton
                dark={value}
                href="https://github.com/puregarlic/personal-website"
              >
                <Code size={32} />
              </IconButton>
              <IconButton dark={value} onClick={toggle}>
                {value ? <Sun size={32} /> : <Moon size={32} />}
              </IconButton>
              <IconButton dark={value} href="https://twitter.com/puregarlic_">
                <Twitter size={32} />
              </IconButton>
              <IconButton dark={value} href="https://github.com/puregarlic">
                <GitHub size={32} />
              </IconButton>
              <IconButton dark={value} href="https://puregarlic.itch.io">
                <Monitor size={32} />
              </IconButton>
              <IconButton
                dark={value}
                href="https://www.linkedin.com/in/graham-barber/"
              >
                <Linkedin size={32} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Home
