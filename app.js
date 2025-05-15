// ./app.js
const connectToDatabase = require('./database/db');  
const express = require('express');

const app = express();
const port = 3000;

let db;

async function initializeApp() {
    try {
        db = await connectToDatabase();
        console.log('App initialized with database connection');

        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Error initializing app:', error);
        process.exit(1); // Exit the process if initialization fails
    }
}

// get all books
app.get('/books', async (req, res) => {
    try {
        const books = await db.collection('test_books').find().limit(10).toArray();

        res.json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).send('Internal Server Error');
    }
});


initializeApp();