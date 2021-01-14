import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import MyPokemonContexProvider from '../../../context/context';
import CatchingDrawer from '../CatchingDrawer'
import MovesTable from '../MovesTable'
import StatList from '../StatList'
import TypeList from '../TypeList'
import WeightHeight from '../WeightHeight'

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

const data = {
  pokemon:{
    name: "Ivysaur",
    sprites:{
      front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    },
    types:["grass", "poison"]
  }
}
test("Render CatchingDrawer Component without Crashing", () =>{
  const div = document.createElement("div")
  ReactDOM.render(
    <ApolloProvider client={client}>
      <MyPokemonContexProvider>
        <CatchingDrawer data={data}></CatchingDrawer>
      </MyPokemonContexProvider>
    </ApolloProvider>
  , div)
})


const movesList = []
test("Render MoveTable Component without Crashing", () =>{
  const div = document.createElement("div")
  ReactDOM.render(
    <ApolloProvider client={client}>
      <MyPokemonContexProvider>
        <MovesTable movesList={movesList}></MovesTable>
      </MyPokemonContexProvider>
    </ApolloProvider>
  , div)
})

const statList = []
test("Render StatList Component without Crashing", () =>{
  const div = document.createElement("div")
  ReactDOM.render(
    <ApolloProvider client={client}>
      <MyPokemonContexProvider>
        <StatList statList={statList}></StatList>
      </MyPokemonContexProvider>
    </ApolloProvider>
  , div)
})

const typeList = []
test("Render TypeList Component without Crashing", () =>{
  const div = document.createElement("div")
  ReactDOM.render(
    <ApolloProvider client={client}>
      <MyPokemonContexProvider>
        <TypeList typeList={typeList}></TypeList>
      </MyPokemonContexProvider>
    </ApolloProvider>
  , div)
})

test("Render WeightHeight Component without Crashing", () =>{
  const div = document.createElement("div")
  ReactDOM.render(
    <ApolloProvider client={client}>
      <MyPokemonContexProvider>
        <WeightHeight height="170" weight="75"></WeightHeight>
      </MyPokemonContexProvider>
    </ApolloProvider>
  , div)
})