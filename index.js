const app = require("./app");

const PORT = process.env.NODE_ENV === 'production' ? process.env.PROD_DB_PORT : process.env.DEV_DB_PORT || 3000;
app.listen(PORT, function () {
  console.log('Started express server at port:'+PORT)
})

