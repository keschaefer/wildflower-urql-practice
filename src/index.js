import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import { Provider, Client, dedupExchange, fetchExchange } from 'urql'
import { cacheExchange } from '@urql/exchange-graphcache'
import { suspenseExchange } from '@urql/exchange-suspense'

const cache = cacheExchange({})
const client = new Client({
  url: 'http://localhost:4000',
  exchanges: [dedupExchange, suspenseExchange, cache, fetchExchange],
  suspense: false
})

ReactDOM.render(
  <Provider value={client}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
