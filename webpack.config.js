var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
		index: './src/pages/index/index.js',
		address: './src/pages/address/address.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader',
              {
		          	loader: 'sass-resources-loader',
		          	options: {
		            	resources: './src/assets/scss/util.scss'
		          	}
		        	}
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(png|jpg|gif|svg|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
  },
  performance: {
    hints: false
  },
  plugins:[
  	// new CopyWebpackPlugin([
    //   {
    //     from: './static',
    //     to: './static'
    //   }
    // ]),
  	//dist中输出html
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      chunks: ['index']
    }),
    new htmlWebpackPlugin({
      filename: 'address.html',
      template: 'address.html',
      inject: true,
      chunks: ['address']
    })
  ],
  devtool: '#cheap-module-eval-source-map'
}

//生产
if (process.env.NODE_ENV.indexOf('production')!= -1) {
  module.exports.devtool = '#cheap-module-source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
var dev= '"//"' //测试环境请求地址

var prod= '"//"' //生产环境请求地址

switch (process.env.NODE_ENV){
	case "productionTest":
		module.exports.plugins = (module.exports.plugins || []).concat([
	    new webpack.DefinePlugin({
	      'process.env': {
	        NODE_ENV: '"productionTest"',
          API_ROOT: dev,
	      }
	    })
	  ])
		break;
	case "productionProd":
		module.exports.plugins = (module.exports.plugins || []).concat([
	    new webpack.DefinePlugin({
	      'process.env': {
	        NODE_ENV: '"d"',
          API_ROOT: prod,
	      }
	    })
	  ])
		break;
	default:
		module.exports.plugins = (module.exports.plugins || []).concat([
	    new webpack.DefinePlugin({
	      'process.env': {
	        NODE_ENV: '"development"',
          API_ROOT: dev,
	      }
	    })
	  ])
		break;
}
