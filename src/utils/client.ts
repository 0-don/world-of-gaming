import {ApolloClient, InMemoryCache} from '@apollo/client';
import {GRAPHQL_URL} from '@env';

// Initialize Apollo Client
export const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          games: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});
