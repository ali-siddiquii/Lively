import React from 'react';
import { Text, Flex, Button } from '@chakra-ui/react';

function OpenApp() {
  return (
    <Flex justifyItems="center" alignItems="center">
      <Button
        variant="solid"
        colorScheme="purple"
        borderRadius="40px"
        maxWidth="100%"
        width="300px"
        height="100px"
        transition="all 0.3s ease-in-out"
        __css={{
          backgroundColor: '#9A6AFF',
          boxShadow: '0px 2px 30px rgb(154, 106, 255, 0.8)',
          border: 'none',
        }}
        _hover={{
          transform: 'scale(1.1)',
        }}
        onClick={() => {
          window.open('../home.js', '_self');
        }}
      >
        <Text fontSize="3xl" fontWeight="600">
          Open App
        </Text>
      </Button>
    </Flex>
  );
}

export default OpenApp;
