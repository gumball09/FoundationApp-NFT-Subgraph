import logo from './logo.svg';
import './App.css';

import { createClient } from "urql"
import { useEffect, useState } from "react"

const URL_API = "https://api.thegraph.com/subgraphs/name/gumball09/foundation-app-nft"

const query = `
query {
  tokens(first: 5) {
    id
    tokenID
    contentURI
    tokenIPFSPath
  }
  users(first: 5) {
    id
    tokens {
      id
    }
    created {
      id
    }
  }
}
`

const client = createClient({
  url: URL_API
})

function App() {
  async function fetchData() {
    const response = await client.query(query).toPromise()
    console.log(response)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
