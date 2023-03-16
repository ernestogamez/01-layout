// ARCHIVO PARA PROD

const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common.js");

// Para las variables de entorno
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
    // Para tener el modo Desarrollo o Producción dentro de los archivos
    mode: "production",

    // Para evitar el error del límite de espacio
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },

    // Para que agrupe por carpetas en dist
    output: {
        filename: "js/[name].[chunkhash].js",
        assetModuleFilename: "images/[hash][ext][query]",
    },

    // Para separar en dos archivos las librerías propias de las de terceros
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
          cacheGroups: {
            vendor: {
                chunks: 'all',
                // Para tener las de terceros en un archivo:
                // name: 'vendor',
                // Para tener las de terceros separadas por módulos:
                name: (module) => {
                const packageName = module.context.match(
                    /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                    )[1];
                    // npm package names are URL-safe, but some servers don't like @ symbols
                    return `vendor/${packageName.replace("@", "")}`;
                },
                test: /[\\/]node_modules[\\/]/,
                enforce: true,
            },
          },
        },
    },

    module: {
        rules: [
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
        
            // Para que agrupe por carpetas en dist
            filename: "css/[name].[chunkhash].css",

            chunkFilename: "[id].css",
        }),

        // Para las variables de entorno
        new Dotenv({
           path: "./prod.env",
        }),
    ],
});