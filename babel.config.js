module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'module:react-native-dotenv',
    'react-native-reanimated/plugin',

    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
  ],
};
