// Para concatenar rutas 
const path = require("path");

// Para mantener el archivo de estilos como .css en lugar de .js tras el build
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Para añadir el index.html en la carpeta dist automáticamente (es un plugin que hemos instalado)
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Para indicar nuestro directorio de trabajo (./src) y no tener que escribirlo siempre
    context: path.resolve(__dirname, "./src"),

    resolve: {
        // Para añadir TypeScript
        extensions: ['.js', '.ts', '.tsx'],
    },

    entry: {
        app: "./index.tsx",
    },
    output: {
        filename: '[name].[chunkhash].js',
        // Para borrar la carpeta dist cada vez que se haga el build
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                // Para TypeScript
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                // Para cargar recursos (img) 
                // No necesita loader
                test: /\.(png|jpg)$/,
                type: 'asset/resource',
            },
            {
                // Para acceder a las referencias dentro del html
                test: /\.html$/,
                loader: 'html-loader',
            },
        ],
    },  
    plugins: [
        //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html', //Name of file in ./dist/
            template: "./index.html", //Name of template in ./src
            scriptLoading:'blocking', // Just use the blocking approach (no modern defer or module)
        }),
    ],

};