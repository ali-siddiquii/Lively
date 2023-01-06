import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Navbar2 from './navbar2';

function ErrorPage2() {
  return (
    <>
      <Navbar2 />
      <Flex width="100%" justifyContent="center">
        <Box width="1100px" height="731px" mx="20px">
          <img
            src={require('../undraw_Page_not_found_re_e9o6.png')}
            alt="404"
          />
        </Box>
      </Flex>
    </>
  );
}

export default ErrorPage2;
