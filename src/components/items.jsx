import { Box, Text, Flex, Icon, HStack, Center } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineCalendar } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { ImBubbles } from 'react-icons/im';

function Items() {
  return (
    <>
      <HStack spacing="50px">
        <Box>
          <Link to="../main.js">
            <Icon as={AiFillHome} fontSize="60px" ml="5px" />
            <Text mr="70px" fontWeight="700" fontSize="22px">
              HOME
            </Text>
          </Link>
        </Box>
        <Box>
          <Link to="../404v2.js">
            <Icon as={BsPeople} fontSize="60px" ml="15px" />
            <Text mr="70px" fontWeight="700" fontSize="22px">
              DOCTOR
            </Text>
          </Link>
        </Box>
        <Box>
          <Link to="../404v2.js">
            <Icon as={AiOutlineCalendar} fontSize="60px" ml="30px" />
            <Text mr="70px" fontWeight="700" fontSize="22px">
              CALENDAR
            </Text>
          </Link>
        </Box>
        <Box>
          <Link to="../404v2.js">
            <Icon as={ImBubbles} fontSize="60px" ml="5px" />
            <Text mr="70px" fontWeight="700" fontSize="22px">
              INBOX
            </Text>
          </Link>
        </Box>
      </HStack>
    </>
  );
}

export default Items;
