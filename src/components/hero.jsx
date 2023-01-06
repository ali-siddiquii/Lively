import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import OpenApp from './openApp';

function Hero() {
  const textColor = '#1E2029';
  return (
    <>
      <Box>
        <Flex width="100%" justifyItems="flex-start">
          <Box width="64px" height="64px" mx="20px" mt="20px">
            <img src={require('../LivelyLogo.png')} alt="LivelyLogo" />
          </Box>
        </Flex>
        <Flex
          mt="200px"
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            color={textColor}
            fontWeight="700"
            fontSize="8xl"
            fontStyle="normal"
          >
            Welcome to <span className="gradient">Lively</span>
          </Text>
        </Flex>
        <Flex justifyContent="center" width="100%" mt="100px">
          <OpenApp />
        </Flex>
      </Box>
    </>
  );
}

export default Hero;
