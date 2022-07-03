function downloadFile() {
    const file = new File(["const path = require('path');",
    "\n",
    "module.exports = {",
      "mode: 'development',",
      "entry: './src/index.js',",
      "output: {",
      "  filename: 'app.js',",
      "  path: path.resolve(__dirname, 'dist'),",
      "},",
      "module: {",
      "    rules: [{",
      "      test: /\.m?js$/,",
      "      exclude: /(node_modules|bower_components)/,",
      "      use: {",
      "          loader: 'babel-loader',",
      "          options: {",
      "            presets: ['@babel/preset-env', '@babel/preset-react']",
      "          }",
      "      }",
      "    }, {",
      "        test: /\.css$/,",
      "        use: ['style-loader', 'css-loader']",
      "    }]",
      "}",
    "};"
], "webpack.config.js");
  // Create a link and set the URL using `createObjectURL`
  const link = document.createElement("a");
  link.style.display = "none";
  link.href = URL.createObjectURL(file);
  link.download = file.name;

  // It needs to be added to the DOM so it can be clicked
  document.body.appendChild(link);
  link.click();

  // To make this work on Firefox we need to wait
  // a little while before removing it.
  setTimeout(() => {
    URL.revokeObjectURL(link.href);
    link.parentNode.removeChild(link);
  }, 0);
}

// Download it using our function
document.getElementById('downloader').addEventListener('click', downloadFile)
