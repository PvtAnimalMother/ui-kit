const path = require('path');

module.exports = (env) => ({
  mode: 'none',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    clean: true,
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ui-kit',
    libraryExport: 'default',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this',
  },
  externals: {
    react: 'react',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              configFile:
                env.stage === 'build' ? 'tsconfig.build.json' : 'tsconfig.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|png|gif|jpg)$/,
        use: 'file-loader',
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
    },
  },
});
