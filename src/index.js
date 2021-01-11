import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import PokemonList from './containers/PokemonList';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider } from '@chakra-ui/react';

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:'https://graphql-pokeapi.vercel.app/api/graphql'
  })
});

ReactDOM.render(
  
  <ApolloProvider client={client}>
    <ChakraProvider>
      <Header />
      <PokemonList />
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();
reportWebVitals();
