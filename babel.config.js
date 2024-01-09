module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: '14' },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    [
      'transform-assets',
      {
        extensions: ['jpg', 'png'],
        name: '[name].[ext]?[sha512:hash:base64:7]',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/*': ['./src/*'],
        },
      },
    ],
  ],
};
