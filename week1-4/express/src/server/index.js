require('dotenv').config();

const http = require('http');

const connectToMongoDB = require('../config/mongoConnection');

const server = require('./server');

const events = require('./events');

const app = require('./server');

const PORT = server.get('port');

const start = async () => {
    try {
        await connectToMongoDB.connectToMongoDB();

        events.bind(http.createServer(server).listen(PORT));
    } catch (error) {
        console.log(error.message);
    }
}

start();
