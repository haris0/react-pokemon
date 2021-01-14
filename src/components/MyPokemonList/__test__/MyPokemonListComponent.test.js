import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import MyPokemonCard from '../MyPokemonCard'
import MyPokemonContexProvider from '../../../context/context'

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

const pokemon = {
  nickName : "Kodok",
  name : "Ivysaur",
  type : ["grass", "poison"],
  img : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"

}

afterEach(cleanup)

test("Render My Pokemon Card Component without Crashing", () =>{
  const div = document.createElement("div")
  ReactDOM.render(
    <ApolloProvider client={client}>
      <MyPokemonContexProvider>
        <MemoryRouter initialEntries={["/detail/ivysaur"]}>
          <MyPokemonCard pokemon={pokemon}></MyPokemonCard>
        </MemoryRouter>
      </MyPokemonContexProvider>
    </ApolloProvider>
  , div)
})

test("Render My Pokemon Card Component correctly", () =>{
  const {getByTestId} = render(
    <ApolloProvider client={client}>
      <MyPokemonContexProvider>
        <MemoryRouter initialEntries={["/detail/ivysaur"]}>
          <MyPokemonCard pokemon={pokemon}></MyPokemonCard>
        </MemoryRouter>
      </MyPokemonContexProvider>
    </ApolloProvider>
  )
  expect(getByTestId("myPokemonCard")).toHaveTextContent("Kodok")
})