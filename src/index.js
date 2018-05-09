import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import App from './components/app'
import createClient from './apollo-client'

render(
<ApolloProvider client={createClient()}>
  <App />
  </ApolloProvider>,
document.getElementById('root')
);