import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import WildPokemonList from '../WildPokemonList'
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

test("Render Wild Pokemon Page without Crashing", () =>{
  const div = document.createElement("div")
  ReactDOM.render(
    <ApolloProvider client={client}>
      <MyPokemonContexProvider>
        <WildPokemonList></WildPokemonList>
      </MyPokemonContexProvider>
    </ApolloProvider>
  , div)
})