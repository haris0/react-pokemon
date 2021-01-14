import React from 'react'
import Header from "./components/Header";
import WildPokemonList from './containers/WildPokemonList';
import PokemonDetail from './containers/PokemonDetail'
import MyPokemonList from './containers/MyPokemonList'
import Page404 from './containers/Page404'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={WildPokemonList}/>
        <Route exact path="/detail/:name" children={<PokemonDetail />}/>
        <Route exact path="/mypokemon" component={MyPokemonList}/>
        <Route exact path="/404" component={Page404}/>
        <Redirect path="*" to="/404"/>
      </Switch>
    </Router>
  )
}
