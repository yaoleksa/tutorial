function downloadFile() {
    const file = new File(["const path = require('path');\n",
"\n",
"module.exports = {\n",
    "mode: 'development',\n",
    "entry: './src/index.js',\n",
    "output: {\n",
    "    filename: 'app.js',\n",
    "    path: path.resolve(__dirname, 'dist')\n",
    "},\n",
    "module: {\n",
    "    rules: [{\n",
    "        test: /\.m?js$/,\n",
    "        exclude: /(node_modules|bower_components)/,\n",
    "        use: {\n",
    "        loader: 'babel-loader',\n",
    "        options: {\n",
    "                presets: ['@babel/preset-env', '@babel/preset-react']\n",
    "             }\n",
    "        }\n",
    "    }]\n",
    "  }\n",
"}\n"
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
