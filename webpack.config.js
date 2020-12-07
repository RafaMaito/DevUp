//auxilia pois as pastas do linux e windows são diferentes (a navegação)
const path = require('path');

module.exports = {
  //arquivo de entrada  pega esse arquivo
  // entry: path.resolve(__dirname, 'src', 'app.js'),
  entry: {
    home: './src/app.js',
    technologies: './src/technologies.js',
    events: './src/events.js',
    community: './src/community.js',
  },
  //joga o arquivo nesse lugar
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  //levanta o servidor da pasta escolhida
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        //pega todos os arquivos .js e coloca no bundle.js
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
