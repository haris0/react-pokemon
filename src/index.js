import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import PokemonList from './containers/PokemonList';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {extendTheme, ChakraProvider } from '@chakra-ui/react';
import {createBreakpoints} from "@chakra-ui/theme-tools"
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client'

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
})

const theme = extendTheme({ breakpoints })

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:'https://graphql-pokeapi.vercel.app/api/graphql'
  })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ChakraProvider theme={theme}>
      <Header />
      <PokemonList />
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();
reportWebVitals();
