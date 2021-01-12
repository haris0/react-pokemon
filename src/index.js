import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {extendTheme, ChakraProvider } from '@chakra-ui/react';
import {createBreakpoints} from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
})

const theme = extendTheme({ breakpoints })

ReactDOM.render(
    <ChakraProvider theme={theme}>
      <AppRouter/>
    </ChakraProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();
reportWebVitals();
