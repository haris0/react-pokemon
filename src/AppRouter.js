import React,{lazy, Suspense} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const Header = lazy(() => import('./components/Header'));
const WildPokemonList = lazy(() => import('./containers/WildPokemonList'));
const PokemonDetail = lazy(() => import('./containers/PokemonDetail'));
const MyPokemonList = lazy(() => import('./containers/MyPokemonList'));
const Page404 = lazy(() => import('./containers/Page404'));

export default function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<></>}>
        <Header/>
        <Switch>
          <Route exact path="/" component={WildPokemonList}/>
          <Route exact path="/detail/:name" children={<PokemonDetail />}/>
          <Route exact path="/mypokemon" component={MyPokemonList}/>
          <Route exact path="/404" component={Page404}/>
          <Redirect path="*" to="/404"/>
        </Switch>
      </Suspense>
    </Router>
  )
}
