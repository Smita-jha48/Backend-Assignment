const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    APP_PORT,
    MONGODB_URI,
    MONGODB_DB,
} = process.env;