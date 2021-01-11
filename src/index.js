import React from 'react';
import ReactDOM from 'react-dom';
import PokemonList from './containers/PokemonList';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <ChakraProvider>
    <PokemonList />
  </ChakraProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();
reportWebVitals();
