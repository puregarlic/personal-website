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
  Link2
} from 'react-feather'

import Head from '../components/head'
import Nav from '../components/nav'
import IconButton from '../components/icon-button'

const Home = () => (
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
          <Flex
            width={1}
            mt={2}
            p={3}
            alignItems="center"
            justifyContent="space-between"
            sx={{ border: '4px solid #0f0f0f' }}
          >
            <Text fontSize="1rem">Personal Website</Text>
            <Link2 />
          </Flex>
          <Flex
            width={1}
            mt={2}
            p={3}
            alignItems="center"
            justifyContent="space-between"
            sx={{ border: '4px solid #0f0f0f' }}
          >
            <Text fontSize="1rem">Round</Text>
            <Link2 />
          </Flex>
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
        <Flex
          alignItems="flex-end"
          flexWrap="wrap-reverse"
          flexDirection="row-reverse"
          sx={{ gridArea: 'links' }}
        >
          <IconButton href="https://twitter.com/puregarlic_">
            <Twitter size={32} />
          </IconButton>
          <IconButton href="https://github.com/puregarlic">
            <GitHub size={32} />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/graham-barber/">
            <Linkedin size={32} />
          </IconButton>
          <IconButton href="https://standardresume.co/r/grahambarber">
            <List size={32} />
          </IconButton>
          <IconButton>
            <BookOpen size={32} />
          </IconButton>
          <IconButton href="https://puregarlic.itch.io">
            <Monitor size={32} />
          </IconButton>
          <IconButton href="https://github.com/puregarlic/personal-website">
            <Code size={32} />
          </IconButton>
          <IconButton>
            <Sun size={32} />
          </IconButton>
        </Flex>
      </Box>
    </Flex>
  </div>
)

export default Home
