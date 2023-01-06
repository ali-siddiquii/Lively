import { Box, Text, Flex, Icon, VStack, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Items from './items';
import React from 'react';

function Navbar2() {
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
        <Items />
      </Flex>
    </>
  );
}

export default Navbar2;
