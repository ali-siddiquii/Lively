import React from 'react';
import Navbar2 from './navbar2';
import {
  Box,
  Text,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
} from '@chakra-ui/react';
import './homePage.css';
import { BsSearch } from 'react-icons/bs';
import Appointment from './cards';

import React from 'react';

function Doctors() {
  return (
    <>
      <Navbar2 />
      <Flex width="100%">
        <img
          className="user-pfp"
          src={require('../userPFP.png')}
          alt="userLogo"
        />
        <Flex flexDirection="column">
          <Text
            width="350px"
            fontSize="64px"
            color="#9A6AFF"
            ml="70px"
            mt="30px"
            fontWeight="500"
          >
            <span className="user-pfp-hello">Hello,</span> Alexander!
          </Text>
          <InputGroup ml="40px" mt="50px">
            <InputLeftElement
              mt="10px"
              ml="7px"
              children={<BsSearch color="#9A6AFF" fontSize="30px" />}
            />
            <Input
              height="60px"
              width="700px"
              placeholder="search..."
              color="black"
              fontSize="20px"
              pl="50px"
            />
          </InputGroup>
        </Flex>
      </Flex>
    </>
  );
}

export default Doctors;
