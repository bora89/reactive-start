var path = require('path');
var webpack = require('webpack');
var rimraf = require('rimraf');
var fs = require('fs');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var debug = process.env.NODE_ENV !== 'production';

var getPlugins = function () {
  var plugins = [];

  plugins.push(
    new webpack.EnvironmentPlugin('NODE_ENV')
  );

  plugins.push(new webpack.NoErrorsPlugin());

  if (!debug) {
    // remove compiler.options.output.path dir on every build
    plugins.push({
      apply: (compiler) => {
        rimraf.sync(compiler.options.output.path);
      }
    });
    // copy index.html to compiler.options.output.path dir on every build
    plugins.push({
      apply: (compiler) => {
        compiler.plugin('done', function() {
          fs.createReadStream('index.html').pipe(
            fs.createWriteStream(
              path.join(compiler.options.output.path, 'index.html')
            )
          );
        });
      }
    });
    // uglify
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      },
      mangle: false
    }));
  }

  return plugins;
};

module.exports = {
  entry: {
    bundle: [__dirname + '/src/index']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: getPlugins(),
  externals: {},
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?functions=selector-parse&root=' + path.resolve('./js')
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg|eot|woff2|woff|ttf)$/,
        loader: 'file?name=assets/[hash:7].[ext]'
      },
    ]
  },
  devtool: debug ? 'eval' : null,
  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    disableHostCheck: true
  }
};
