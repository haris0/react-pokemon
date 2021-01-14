import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import MyPokemonContexProvider from '../../../context/context';
import MyPokemonButton from '../MyPokemonButton'
import WildCardPokemon from '../WildCardPokemon'
import {
  BrowserRouter as Router,
} from "react-router-dom";
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

test("Render MyPokemonButton Component without Crashing", () =>{
  const div = document.createElement("div")
  ReactDOM.render(
    <ApolloProvider client={client}>
      <MyPokemonContexProvider>
        <Router>
          <MyPokemonButton number="7"></MyPokemonButton>
        </Router>
      </MyPokemonContexProvider>
    </ApolloProvider>
  , div)
})

test("Render MyPokemonButton Component without Crashing", () =>{
  const div = document.createElement("div")
  ReactDOM.render(
    <ApolloProvider client={client}>
      <MyPokemonContexProvider>
        <Router>
          <MyPokemonButton number="7"></MyPokemonButton>
        </Router>
      </MyPokemonContexProvider>
    </ApolloProvider>
  , div)
})

const pokemon = {
  name : "Ivysaur",
  image : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
}
test("Render WildCardPokemon Component without Crashing", () =>{
  const div = document.createElement("div")
  ReactDOM.render(
    <ApolloProvider client={client}>
      <MyPokemonContexProvider>
      <Router>
          <WildCardPokemon pokemon={pokemon}></WildCardPokemon>
        </Router>
      </MyPokemonContexProvider>
    </ApolloProvider>
  , div)
})