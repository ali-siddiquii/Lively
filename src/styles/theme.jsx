import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    secondary: '#FFFFFF',
    primary: '#9A6AFF',
    bgColor: '#FFFFFF',
    textColor: '#1E2029',
  },
  fonts: {
    body: 'monserrat, sans-serif',
    heading: 'monsterrat, sans-serif',
  },
  styles: {
    global: () => ({
      body: {
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        color: 'white',
        backgroundColor: 'bgColor',
        padding: 0,
        margin: 0,
      },

      '&::-webkit-scrollbar': {
        width: '0.5em',
      },
      '&::-webkit-scrollbar-track': {
        borderRadius: '0px',
        background: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'primary',
        borderRadius: '50px',
      },
    }),
  },
});

export default theme;
