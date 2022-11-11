import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import { Provider } from "react-redux";

import Home from "./containers/Home";
import Detail from "./containers/Detail";
import DetailSimple from "./containers/DetailSimple";
import NoMatch from "./containers/NoMatch";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Saved from "./containers/Saved";
import Nav from "./components/Nav";
import store from "./utils/store";

//modify url either in package.json with proxy or here in front of graphql (but currently removed because it causes problems with the cocktails api) - need to resolve before introducing backend
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL || "/graphql",
  credentials: "same-origin",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Provider store={store}>
            <Nav />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/saved" element={<Saved />} />
              <Route exact path="/cocktail/:id" element={<DetailSimple />} />
              <Route component={<NoMatch />} />
            </Routes>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
