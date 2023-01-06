import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { HStack, Box, Text, Icon, Button, Flex } from '@chakra-ui/react';

function Appointment() {
  return (
    <HStack ml="120px" mb="100px" mt="40px" spacing="150px">
      <Box
        bgColor="#F5F7FB"
        width="315px"
        height="320px"
        position="relative"
        borderTopRadius="10px"
        mb="70px"
        className="card"
      >
        <Box position="absolute" top="-30px" left="-40px">
          <img src={require('../MaskGroup1.png')} alt="doctorPFP" />
        </Box>
        <Box mb="170px"></Box>
        <Text ml="20px" color="#434343" fontWeight="500" fontSize="24px">
          Dr. Gloria Borger
        </Text>
        <Box
          width="216px"
          height="46px"
          variant="ghost"
          bgColor="#fcdec95e"
          borderRadius="7px"
          ml="20px"
          mt="10px"
        >
          <Text ml="10px" color="#9A6AFF" fontSize="27px" fontWeight="500">
            Self-Awareness
          </Text>
        </Box>
        <Button
          width="315px"
          height="110px"
          bgColor="#9B6AFF"
          color="white"
          fontSize="24px"
          mt="30px"
          _hover={{ bg: '#6926f7' }}
          borderTopRadius="0px"
        >
          <Icon as={AiOutlineClockCircle} />
          <Text ml="10px">JOIN NOW</Text>
        </Button>
      </Box>
      {/*  */}
      {/*  */}
      <Box
        bgColor="#F5F7FB"
        width="315px"
        height="320px"
        position="relative"
        borderTopRadius="10px"
        mb="70px"
        top="-35px"
      >
        <Box position="absolute" top="-30px" left="-40px">
          <img src={require('../MaskGroup2.png')} alt="doctorPFP" />
        </Box>
        <Box mb="170px"></Box>
        <Text ml="20px" color="#434343" fontWeight="500" fontSize="24px">
          Dr. Monica Rambeau
        </Text>
        <Box
          width="216px"
          height="46px"
          variant="ghost"
          bgColor="#fcdec95e"
          borderRadius="7px"
          ml="20px"
          mt="10px"
        >
          <Text ml="10px" color="#9A6AFF" fontSize="27px" fontWeight="500">
            Self-Positivity
          </Text>
        </Box>
        <Button
          width="315px"
          height="110px"
          bgColor="#9B6AFF"
          color="white"
          fontSize="24px"
          mt="30px"
          _hover={{ bg: '#6926f7' }}
          borderTopRadius="0px"
        >
          <Icon as={AiOutlineClockCircle} />
          <Text ml="10px">WED 12:00 PM</Text>
        </Button>
      </Box>
      {/*  */}
      {/*  */}
      <Box
        bgColor="#F5F7FB"
        width="315px"
        height="320px"
        position="relative"
        borderTopRadius="10px"
        mb="70px"
        top="-35px"
      >
        <Box position="absolute" top="-30px" left="-40px">
          <img src={require('../MaskGroup3.png')} alt="doctorPFP" />
        </Box>
        <Box mb="170px"></Box>
        <Text ml="20px" color="#434343" fontWeight="500" fontSize="24px">
          Dr. David Grains
        </Text>
        <Box
          width="256px"
          height="86px"
          variant="ghost"
          bgColor="#fcdec95e"
          borderRadius="7px"
          ml="20px"
          mt="10px"
        >
          <Text ml="10px" color="#9A6AFF" fontSize="27px" fontWeight="500">
            Anxiety and Stress Control
          </Text>
        </Box>
        <Button
          width="315px"
          height="110px"
          bgColor="#9B6AFF"
          color="white"
          fontSize="24px"
          mt="30px"
          _hover={{ bg: '#6926f7' }}
          borderTopRadius="0px"
        >
          <Icon as={AiOutlineClockCircle} />
          <Text ml="10px">THURS 2:00 PM</Text>
        </Button>
      </Box>
    </HStack>
  );
}

export default Appointment;
