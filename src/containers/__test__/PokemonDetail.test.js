import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import PokemonDetail from '../PokemonDetail'
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

test("Render Pokemon Detail without Crashing", () =>{
  const div = document.createElement("div")
  ReactDOM.render(
    <ApolloProvider client={client}>
      <MyPokemonContexProvider>
        <MemoryRouter initialEntries={["/detail/ivysaur"]}>
          <PokemonDetail></PokemonDetail>
        </MemoryRouter>
      </MyPokemonContexProvider>
    </ApolloProvider>
  , div)
})