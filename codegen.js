module.exports = {
  overwrite: true,
  schema: ['https://igdb.myngz.com'],
  documents: 'src/graphql/**/*.graphql',
  config: {
    scalars: {
      DateTime: 'Date',
    },
  },
  generates: {
    './src/generated/graphql.tsx': {
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
