import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools"
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client'
import MyPokemonContexProvider from './context/context'

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:'https://graphql-pokeapi.vercel.app/api/graphql'
  })
});

const theme = extendTheme({ breakpoints })

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ApolloProvider client={client}>
      <MyPokemonContexProvider>
        <AppRouter />
      </MyPokemonContexProvider>
    </ApolloProvider>
  </ChakraProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();
reportWebVitals();
