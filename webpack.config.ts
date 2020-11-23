import path from 'path';
import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default <Configuration>{
  entry: {
    base64: './src/base64.ts',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'Base64',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            },
          },
        ],
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
    }),
  ],
  resolve: {
    extensions: ['.ts'],
  },
};
