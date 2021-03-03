module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    "optional-require",
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['babel-plugin-root-import', {rootPathPrefix: '@@', rootPathSuffix: 'src'}],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
