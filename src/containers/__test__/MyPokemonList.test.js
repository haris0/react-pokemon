import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import MyPokemonList from '../MyPokemonList'
import MyPokemonContexProvider from '../../context/context'

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

afterEach(cleanup)

test("Render My Pokemon Page without Crashing", () =>{
  const div = document.createElement("div")
  ReactDOM.render(
    <ApolloProvider client={client}>
      <MyPokemonContexProvider>
        <MyPokemonList></MyPokemonList>
      </MyPokemonContexProvider>
    </ApolloProvider>
  , div)
})