import React from 'react';
import logo from './logo.png';
// These are the things I am importing for Apollo
// -----> Apollo Imports
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
// -----> Apollo Imports
// -----> My Imports
import Launches from './components/Launches';
// -----> My Imports

import './App.css';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img src={logo} alt="Spacex" />
        <Launches></Launches>
      </div>
    </ApolloProvider>
  );
}

export default App;
