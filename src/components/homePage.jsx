import React from 'react';
import Navbar2 from './navbar2';
import {
  Box,
  Text,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import './homePage.css';
import { BsSearch } from 'react-icons/bs';
import Appointment from './cards';

function Application() {
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
        <Box
          width="430px"
          height="475px"
          right="50px"
          bottom="50px"
          mt="300px"
          ml="300px"
          bgColor="#F5F7FB"
          position="absolute"
        >
          <Text
            ml="10px"
            mt="10px"
            fontSize="24px"
            fontWeight="500"
            color="#9A6AFF"
            width="330px"
            bgColor="#fcdec95e"
          >
            Reminders from your doctors:
          </Text>
          <Text
            width="360px"
            mt="10px"
            ml="40px"
            fontSize="24px"
            fontWeight="500"
            color="#434343"
          >
            <ul>
              <li>Complete Diagnosis check</li>
              <li>Pickup medications from pharmacy</li>
              <li>Take anti-depressant medications</li>
              <li>Complete worksheets for next meeting (Dr. Grains)</li>
              <li>Follow healthy thinking patterns</li>
            </ul>
          </Text>
        </Box>
      </Flex>

      <Box className="divide"></Box>
      <Text
        fontWeight="500"
        fontSize="36px"
        fontFamily="Poppins, sans-serif"
        color="#0C2730"
        ml="60px"
      >
        Upcoming Appointments
      </Text>
      <Appointment />
    </>
  );
}

export default Application;
