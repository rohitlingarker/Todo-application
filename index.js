const app = require("./app");

const PORT = process.env.NODE_ENV === 'production' ? process.env.PROD_SERVER_PORT : process.env.DEV_SERVER_PORT || 3000;
app.listen(PORT, function () {
  console.log('started express server at port:'+PORT)
})

