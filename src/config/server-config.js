const dotenv = require('dotenv');
dotenv.config();
console.log("This is a config file");
module.exports = {
    PORT: process.env.PORT || 3000
}