import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import 'antd/dist/antd.css'; 
import './App.css';


import GetSwitch from './components/GetSwitch'


const client = new ApolloClient({
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": "123-123-123-123-123"
    },
  uri: 'https://gql-2.test.serafim.help/v1/graphql',
});


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ApolloProvider client={client}> 
            <GetSwitch />
        </ApolloProvider>
        </BrowserRouter>
    </div>
  );
}


export default App;
