require('dotenv').config();

module.exports = {
  overwrite: true,
  schema: [process.env.GRAPHQL_URL],
  documents: 'src/graphql/**/*.graphql',
  config: {
    scalars: {
      DateTime: 'Date',
    },
  },
  generates: {
    './src/graphql/generated/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
        'named-operations-object',
      ],
      config: {
        identifierName: 'namedOperations',
      },
    },
  },
};
