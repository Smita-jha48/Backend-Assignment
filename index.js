const express = require('express');
const cors = require('cors');
const route = require('./src/routes');
const {APP_PORT} = require('./src/config');
const {connectToMongoDB} = require('./src/utils/dbCon');
const app = express();

app.use(express.json());
app.use(cors());
connectToMongoDB();

app.use('/api', route);

app.listen(APP_PORT, (error) => {
    if(!error) {
        console.error(`Server is running on port ${APP_PORT}`);
    }
    else {
        console.error(`Error occurred: ${error.message}`);
    }
});







