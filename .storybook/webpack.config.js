const path = require('path');

module.exports = ({ config }) => ({
  ...config,
  stats: {
    logging: 'verbose'
  },
  module: {
    ...config.module,
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use:[
          {
            loader: require.resolve("babel-loader"),
            options: {
            presets: [["react-app", { flow: false, typescript: true }]]
            }
          }
        ],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:[
          {
            loader: require.resolve("babel-loader"),
            options: {
            presets: [["react-app", { flow: false, typescript: true }]]
            }
          }
        ],
        include: path.resolve(__dirname, "../")
      },
      {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader',{
                      loader: 'sass-resources-loader',
                      options: {
                          resources: [
                              path.resolve(__dirname, '../src/components/00-tokens/reset/index.scss')
                          ]
                      }
                  }],
          include: path.resolve(__dirname, '../'),
        },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: { sourceMap: true }
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          },
          {
            loader: require.resolve("postcss-loader"),
            options: {
              ident: "postcss",
              plugins: () => [
                require("postcss-flexbugs-fixes"),
                require("postcss-inline-svg"),
                require("postcss-svgo"),
                autoprefixer({
                  browsers: [
                    ">1%",
                    "last 4 versions",
                    "Firefox ESR",
                    "not ie < 9"
                  ],
                  flexbox: "no-2009"
                })
              ]
            }
          }
        ],
        include: path.resolve(__dirname, "../")
      }
    ]
  }
});

