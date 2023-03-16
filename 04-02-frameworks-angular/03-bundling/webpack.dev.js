// ARCHIVO PARA DESA

const path = require("path");

// Importamos la parte común
const common = require("./webpack.common.js");

// Para las variables de entorno
const Dotenv = require('dotenv-webpack');

// Mejor con webpack-merge (corrige problemas de sobreescritura)
const { merge } = require("webpack-merge");

// Mejor con webpack-merge
module.exports = merge(common, {
    // Para tener el modo Desarrollo o Producción dentro de los archivos
    mode: "development",
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                "style-loader",
                {
                    loader: "css-loader",
                },
                "sass-loader",
                ],
            },
            ],
        },
    stats: "errors-only",
    devtool: "eval-source-map",
    devServer: {
        port: 8080,
    },

    // Para las variables de entorno
    plugins: [
        new Dotenv({
            path: './dev.env',
        }),
    ],
});