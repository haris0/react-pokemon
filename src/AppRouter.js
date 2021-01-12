import React from 'react'
import Header from "./components/Header";
import PokemonList from './containers/PokemonList';
import PokemonDetail from './containers/PokemonDetail'
import MyPokemonList from './containers/MyPokemonList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
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


export default function AppRouter() {
  return (
    
  <ApolloProvider client={client}>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={PokemonList}/>
        <Route exact path="/detail/:name" children={<PokemonDetail />}/>
        <Route exact path="/caught" component={MyPokemonList}/>
      </Switch>
    </Router>
  </ApolloProvider>
  )
}
