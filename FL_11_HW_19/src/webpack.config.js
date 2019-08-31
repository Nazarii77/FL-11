const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via yarn
const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via yarn
const webpack = require('webpack'); // to access built-in plugins
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('src/sass/styles.sass');
var PrettierPlugin = require("prettier-webpack-plugin");

const webpack_rules = [];
const webpackOption = {
    entry: {
        'app': [
            path.resolve(__dirname, './js/app.js' ),
            path.resolve(__dirname, './js/app2.js' )/*,
            path.resolve(__dirname, './sass/styles.sass' )*/
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname , 'dist/js')
    },

    plugins: [
        new CleanWebpackPlugin() ,
        new HtmlWebpackPlugin({
            title: 'Output Management' ,
            template: 'index.html',
            filename: ('src/dist', '../index.html' )//relative to root of the application
        }),
        new MiniCssExtractPlugin({
            filename:  path.resolve(__dirname, "css/styles.css"  )
        }),
        new PrettierPlugin()
    ],
    optimization:{
        //minimize: false, // <---- disables uglify.
        // minimizer: [new UglifyJsPlugin()] <----- if you want to customize it.
        minimizer: [new UglifyJsPlugin()]
    },
    module: {
        rules:    webpack_rules
    }
};
let babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"]
        }
    }
};


let fileLoader = { test: /\.(png|jpg)$/, loader: 'file-loader',

               // In options we can set different things like format
               // and directory to save
               options: {
                 outputPath: 'img'
} }

let cssLoader =  {
    // Apply rule for .sass, .scss or .css files
    test: /\.(sa|sc|c)ss$/,

    // Set loaders to transform files.
    // Loaders are applying from right to left(!)
    // The first loader will be applied after others
    use: [
            {
                // After all CSS loaders we use plugin to do his work.
                // It gets all transformed CSS and extracts it into separate
                // single bundled file
                loader: MiniCssExtractPlugin.loader
            },
            {
                // This loader resolves url() and @imports inside CSS
                loader: "css-loader",
            },
            {
                // Then we apply postCSS fixes like autoprefixer and minifying
                loader: "postcss-loader"
            },
            {
                // First we transform SASS to standard CSS
                loader: "sass-loader"

            }
        ]
}
webpack_rules.push(fileLoader);
webpack_rules.push(cssLoader);
webpack_rules.push(babelLoader);
module.exports = webpackOption;


