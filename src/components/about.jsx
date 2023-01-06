
import React from 'react';
import { Text, Flex, Box, Spacer } from '@chakra-ui/react';
import Navbar from './navbar';

function About() {
  return (
    <>
      <Navbar />
      <Flex width="100%" mt="30px" justifyContent="center">
        <Box>
          <Text fontSize="90px" fontWeight="700" color="#9A6AFF" mt="100px">
            About Us
          </Text>
          <Text fontSize="40px" color="blackAlpha.700" width="700px" mt="40px">
            Lively is a Mental Health App to serve people that need help and
            should be accessible to everyone. This app is a prototype made by a
            team of developers that believe Mental Health is a social good.
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default About;
