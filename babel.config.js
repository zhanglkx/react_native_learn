module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          test: './test',
          underscore: 'lodash',
          '@/asserts': './src/assets',
          '@/pages': './src/pages',
        },
      },
    ],
  ],
};
