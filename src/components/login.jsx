import React from 'react';
import {
  Text,
  Flex,
  Box,
  Button,
  Input,
  VStack,
  Icon,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';
import { RiHeartPulseLine } from 'react-icons/ri';
import Navbar from './navbar';
import { BsFillEyeFill } from 'react-icons/bs';

function Login() {
  return (
    <>
      <Navbar />
      <Flex width="100%" mt="30px" justifyContent="center">
        <VStack>
          <Box
            width="630px"
            height="620px"
            bgColor="#F5F7FB"
            borderRadius="17px"
            boxShadow="0px 2px 30px rgb(154, 106, 255, 0.2)"
          >
            <Box display="flex" alignItems="center" ml="30px" mt="30px">
              <Icon as={RiHeartPulseLine} fontSize="120px" color="#9A6AFF" />
              <Text
                fontWeight="500"
                fontSize="30px"
                color="#9A6AFF"
                ml="30px"
                mb="20px"
              >
                {' '}
                PATIENT LOGIN
              </Text>
            </Box>
            <InputGroup justifyContent="center" mt="60px">
              <Input
                placeholder="Email"
                width="430px"
                color="black"
                outlineColor="blackAlpha.300"
              />
            </InputGroup>
            <InputGroup justifyContent="center" mt="60px">
              <InputRightElement
                placeholder="Password"
                children={<BsFillEyeFill color="black" />}
                mr="100px"
              />
              <Input
                placeholder="Password"
                width="430px"
                color="black"
                outlineColor="blackAlpha.300"
              />
            </InputGroup>
            <Text
              my="50px"
              ml="230px"
              fontWeight="500"
              fontSize="20px"
              color="#9A6AFF"
            >
              Forgot Password?
            </Text>
            <Button
              ml="110px"
              width="400px"
              color="#fff"
              bgColor="#9A6AFF"
              boxShadow="0px 2px 30px rgb(154, 106, 255, 0.8)"
              transition="all 0.4s ease-in-out"
              _hover={{
                backgroundColor: '#7447d4',
                transform: 'scale(1.1)',
              }}
              onClick={() => {
                window.open('../main.js', '_self');
              }}
            >
              Login
            </Button>
          </Box>
        </VStack>
      </Flex>
    </>
  );
}

export default Login;
