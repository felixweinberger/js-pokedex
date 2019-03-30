{
  "devServer": {
    "historyApiFallback": true,
    "proxy": {
      "/api": {
        "target" : "http://localhost:3000",
        "secure": false
      }
    }
  }
}