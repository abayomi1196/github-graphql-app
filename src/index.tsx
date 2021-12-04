import React from "react";
import ReactDOM from "react-dom";

// apollo
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/ClientInstance";

// contexts
import { NameContextProvider } from "./context/NameContext";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <NameContextProvider>
        <App />
      </NameContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
