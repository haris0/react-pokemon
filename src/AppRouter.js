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

export default function AppRouter() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={PokemonList}/>
        <Route exact path="/detail/:name" children={<PokemonDetail />}/>
        <Route exact path="/caught" component={MyPokemonList}/>
      </Switch>
    </Router>
  )
}
