import { serverUrl } from "@/utils/utils";
import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
    uri: `${serverUrl}/graphql`,
    cache: new InMemoryCache(),
});
