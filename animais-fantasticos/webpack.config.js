const path = require("path");

module.exports = {
  entry: "./js/script.js", // Arquivo de entrada
  output: {
    filename: "main.js", // Nome do arquivo de saída
    path: path.resolve(__dirname, "./"), // Diretório de saída (raiz do projeto)
  },
  mode: "development", // Modo de desenvolvimento
  module: {
    rules: [
      {
        test: /\.js$/, // Verifica se o arquivo termina com .js
        exclude: /node_modules/, // Ignora a pasta node_modules
        use: {
          loader: "babel-loader", // Usa o loader do Babel
          options: {
            presets: ["@babel/preset-env"], // Usa o preset env
            plugins: ["@babel/plugin-transform-runtime"], // Usa o plugin para classes
          },
        },
      },
    ],
  },
};
