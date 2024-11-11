import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const isDevelopment = process.env.NODE_ENV === "development";
const serverUrl = isDevelopment
  ? "http://localhost:5002"
  : "https://jira-tracker-server.onrender.com";

const httpLink = createHttpLink({
  uri: `${serverUrl}`,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  // uri: `${serverUrl}/graphql`,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
