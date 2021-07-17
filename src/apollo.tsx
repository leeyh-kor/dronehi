import {ApolloClient,InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri:"http://15.164.100.109/graphql",
    cache:new InMemoryCache()
});
export default client