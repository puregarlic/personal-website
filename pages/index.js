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
import styled from '@emotion/styled'
import useDarkMode from 'use-dark-mode'
import ReactTooltip from 'react-tooltip'

import Head from '../components/head'
import IconButton from '../components/icon-button'
import Project from '../components/project'

const HomeLayout = styled(Box)`
  padding: 4rem;
  border: 4px solid mediumspringgreen;
  width: 100vw;
  height: 800px;
  max-width: 1440px;
  display: grid;
  grid-template-areas:
    'name . budget'
    'bio . links';
  grid-template-rows: 1fr max-content;
  grid-template-columns: 800px 1fr 25rem;

  @media (max-width: 1440px) {
    border: none;
  }

  @media (max-width: 1366px) {
    height: auto;
    max-height: unset;
    grid-template-areas:
      'name'
      'bio'
      'links'
      'budget';
    grid-template-rows: max-content;
    grid-template-columns: 1fr;
    max-width: 900px;
    gap: 4rem;
  }

  @media (max-width: 820px) {
    border: none;
  }

  @media (max-width: 500px) {
    padding: 3rem;
  }
`

const Name = styled(Box)`
  font-size: 10rem;
  font-weight: 700;
  line-height: 0.9;

  @media (max-width: 820px) {
    font-size: 5rem;
  }

  @media (max-width: 425px) {
    font-size: 4rem;
    line-height: 1;
  }
`

const Links = styled(Box)`
  display: grid;
  align-content: flex-end;
  justify-content: flex-end;
  gap: 12px;
  grid-template-columns: repeat(4, max-content);

  @media (max-width: 1366px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  @media (max-width: 720px) {
    display: grid;
    gap: 2rem;
  }

  @media (max-width: 425px) {
    gap: 1rem;
  }
`

const Home = () => {
  const { value, toggle } = useDarkMode(false)
  return (
    <div>
      <Head title="Graham Barber" />
      <ReactTooltip className="tooltip" effect="solid" />
      <Flex
        width={1}
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <HomeLayout>
          <Name sx={{ gridArea: 'name' }}>Graham Barber</Name>
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
          <Links sx={{ gridArea: 'links' }}>
            <IconButton tip="Blog (Coming Soon)">
              <BookOpen size={32} />
            </IconButton>
            <IconButton
              tip="Resumé"
              href="https://standardresume.co/r/grahambarber"
            >
              <List size={32} />
            </IconButton>
            <IconButton
              tip="Website Source"
              href="https://github.com/puregarlic/personal-website"
            >
              <Code size={32} />
            </IconButton>
            <IconButton tip="Toggle dark mode" onClick={toggle}>
              {value ? <Sun size={32} /> : <Moon size={32} />}
            </IconButton>
            <IconButton tip="Twitter" href="https://twitter.com/puregarlic_">
              <Twitter size={32} />
            </IconButton>
            <IconButton tip="GitHub" href="https://github.com/puregarlic">
              <GitHub size={32} />
            </IconButton>
            <IconButton tip="Itch" href="https://puregarlic.itch.io">
              <Monitor size={32} />
            </IconButton>
            <IconButton
              tip="LinkedIn"
              href="https://www.linkedin.com/in/graham-barber/"
            >
              <Linkedin size={32} />
            </IconButton>
          </Links>
        </HomeLayout>
      </Flex>
    </div>
  )
}

export default Home
