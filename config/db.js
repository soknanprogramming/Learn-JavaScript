// config/db.js
const { MongoClient } = require('mongodb');

let db;

async function connectToDatabase() {
    const uri = 'mongodb://localhost:27017'; 
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connected to MongoDB');
        db = client.db('test');
        return db;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

module.exports = connectToDatabase;