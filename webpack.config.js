const path = require('path');

module.exports = {
  entry: './index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output bundle filename
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Don't apply this rule to files in node_modules
        use: {
          loader: 'babel-loader', // Use babel-loader for transpiling .js files
          options: {
            presets: ['@babel/preset-env'] // Use @babel/preset-env for transpiling modern JavaScript features
          }
        }
      }
      // Add more rules for other file types (e.g., CSS, images) as needed
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // Serve content from the dist directory
    port: 9000 // Port number for development server
  }
};
