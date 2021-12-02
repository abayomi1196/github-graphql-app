import React from "react";
import ReactDOM from "react-dom";

// apollo
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/ClientInstance";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
