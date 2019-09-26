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
            I'm a web developer, DevOps specialist, game developer, and
            JavaScript enthusiast. Currently, I am pursuing an undergraduate
            degree in business management from Oregon State University.
          </Text>
          <Text>
            My passions include improving development processes, development
            workflow automation, and using cutting-edge web technologies.
          </Text>
        </Box>
        <Flex
          flexDirection="row-reverse"
          flexWrap="wrap-reverse"
          alignItems="flex-end"
          sx={{ gridArea: 'links', gap: '1rem' }}
        >
          <Flex
            m={1}
            height="5rem"
            width="5rem"
            bg="#0f0f0f"
            alignItems="center"
            justifyContent="center"
            color="white"
            sx={{ borderRadius: '100%' }}
          >
            <Twitter size={32} />
          </Flex>
          <Flex
            m={1}
            height="5rem"
            width="5rem"
            bg="#0f0f0f"
            alignItems="center"
            justifyContent="center"
            color="white"
            sx={{ borderRadius: '100%' }}
          >
            <GitHub size={32} />
          </Flex>
          <Flex
            m={1}
            height="5rem"
            width="5rem"
            bg="#0f0f0f"
            alignItems="center"
            justifyContent="center"
            color="white"
            sx={{ borderRadius: '100%' }}
          >
            <Linkedin size={32} />
          </Flex>
          <Flex
            m={1}
            height="5rem"
            width="5rem"
            bg="#0f0f0f"
            alignItems="center"
            justifyContent="center"
            color="white"
            sx={{ borderRadius: '100%' }}
          >
            <List size={32} />
          </Flex>
          <Flex
            m={1}
            height="5rem"
            width="5rem"
            bg="#0f0f0f"
            alignItems="center"
            justifyContent="center"
            color="white"
            sx={{ borderRadius: '100%' }}
          >
            <BookOpen size={32} />
          </Flex>
          <Flex
            m={1}
            height="5rem"
            width="5rem"
            bg="#0f0f0f"
            alignItems="center"
            justifyContent="center"
            color="white"
            sx={{ borderRadius: '100%' }}
          >
            <Monitor size={32} />
          </Flex>
          <Flex
            m={1}
            height="5rem"
            width="5rem"
            bg="#0f0f0f"
            alignItems="center"
            justifyContent="center"
            color="white"
            sx={{ borderRadius: '100%' }}
          >
            <Code size={32} />
          </Flex>
          <Flex
            m={1}
            height="5rem"
            width="5rem"
            bg="#0f0f0f"
            alignItems="center"
            justifyContent="center"
            color="white"
            sx={{ borderRadius: '100%' }}
          >
            <Sun size={32} />
          </Flex>{' '}
        </Flex>
      </Box>
    </Flex>
  </div>
)

export default Home
