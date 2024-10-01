import { ApolloClient, InMemoryCache } from "@apollo/client";

const isDevelopment = process.env.NODE_ENV === "development";
const serverUrl = isDevelopment
  ? "http://localhost:5002"
  : "https://jira-tracker-server.onrender.com";

export const client = new ApolloClient({
  uri: `${serverUrl}/graphql`,
  cache: new InMemoryCache(),
});
