import { Box, Text, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import React from 'react';

function Navbar() {
  return (
    <>
      <Flex width="100%" height="160px" alignItems="center" bgColor="#9A6AFF">
        <Box mr="100px" ml="15px">
          <Text
            fontFamily="Roboto, sans-serif"
            fontWeight="700"
            fontSize="64px"
            fontStyle="normal"
            ml="20px"
          >
            <Link to="/">LIVELY</Link>
          </Text>
        </Box>
        <Flex ml="35px">
          <Text mr="70px" fontWeight="700" fontSize="32px">
            <Link to="../aboutUs.js">ABOUT US</Link>
          </Text>
          <Text fontWeight="700" fontSize="32px">
            <Link to="../404.js">SERVICES</Link>
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default Navbar;
