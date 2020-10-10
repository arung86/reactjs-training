import React from "react";
//import logo from "./logo.svg";
import "./App.css";

import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4001/graphql",
  cache: new InMemoryCache(),
});

const GET_ROLES = gql`
  {
    roles {
      id
      roleName
    }
  }
`;

function Roles() {
  const { loading, error, data } = useQuery(GET_ROLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.roles.map(({ id, roleName }) => (
    <div key={id}>
      <p>
        {id}: {roleName}
      </p>
    </div>
  ));
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <Roles />
      </div>
    </ApolloProvider>
  );
}

/*client
  .query({
    query: gql`
      query getRoles {
        roles {
          id
          roleName
        }
      }
    `,
  })
  .then((result) => console.log(result));

function App() {
  return (
    <div className="App">
      <h2>Hello Graphql</h2>
    </div>
  );
}
*/
export default App;
