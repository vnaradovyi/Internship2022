const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

async function connectToMongoDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/internship', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.log(error.message);
    }
}

const usersDB = mongoose.connection;

usersDB.on('connected', () => {
    console.log('Connected to internship DB!');
});

usersDB.on('open', () => {
    console.log('Open internship DB!');
});

usersDB.on('error', (err) => {
    console.log('Error:', err.message);
});

module.exports = {
    connectToMongoDB,
    usersDB,
};
