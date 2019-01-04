import React, { Component } from "react"
import logo from "../public/logo.svg"
import client from "../apollo/client"
import { ApolloProvider } from "react-apollo"
import "../public/styles/App.scss"

import { LOGIN } from '../apollo/templates/Mutations';

//TESTING A MUTATION - WORKS
/* const signup = gql`
  mutation {
    login(data: { email: "riesen.bla@web.de", password: "123456789" }) {
      token
    }
  }
`
 */
/* 
NOTE: LOGIN mit input variablen (TODO: benutzen von Mutation react-apollo Components wäre cooler)

client
  .mutate({
    mutation: LOGIN,
    variables: {
      data:{
        email: "riesen.bla@web.de",
        password: "123456789"
      }
    }
  })
  .then(result => {
    sessionStorage.setItem('token', result.data.login.token)
  }) */

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    )
  }
}

export default App
