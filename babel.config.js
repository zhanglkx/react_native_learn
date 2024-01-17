module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:@react-native/babel-preset',
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
