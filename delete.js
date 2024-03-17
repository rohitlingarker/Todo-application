// import "bcrypt.js";
const bcrypt = require(  'bcrypt' );

async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPwd = await bcrypt.hash(password, saltRounds)
  return hashedPwd
}

// Usage
hashPassword("q").then(hashedPwd => console.log(hashedPwd))

