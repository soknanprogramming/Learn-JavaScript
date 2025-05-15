// app.js
const connectToDatabase = require('./database/db');  
const express = require('express');
const { ObjectId } = require('mongodb'); 

const app = express();
const port = 3000;

let db;

async function initializeApp() {
    try {
        db = await connectToDatabase();
        console.log('App initialized');

        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Error initializing app:', error);
        process.exit(1); 
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

function isValidObjectId(id) {
    return ObjectId.isValid(id) && (String)(new ObjectId(id)) === id;
}
// get a book by id
app.get('/books/:id', async (req, res) => {
    try {
        const bookId = req.params.id;
        
        // Try to convert bookId to a number for numeric IDs
        const numericId = Number(bookId);
        
        // Choose the right query based on ID format
        let query;
        if (!isNaN(numericId)) {
            // If it's a valid number, query by numeric ID
            query = { _id: numericId };
        } else if (isValidObjectId(bookId)) {
            // If it's a valid ObjectId, query by ObjectId
            query = { _id: new ObjectId(bookId) };
        } else {
            // Neither a valid number nor ObjectId
            return res.status(400).send('Invalid book ID format');
        }
        
        const book = await db.collection('test_books').findOne(query);
        if (!book) {
            return res.status(404).send('Book not found');
        }
        res.json(book);
    } catch (error) {
        console.error('Error fetching book:', error);
        res.status(500).send('Internal Server Error');
    }
});

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// post a book
app.post('/books', async (req, res) => {
    try {
        const newBook = req.body;
        const result = await db.collection('test_books').insertOne(newBook);
        // Get the inserted document by querying for it with its _id
        const insertedBook = await db.collection('test_books').findOne({ _id: result.insertedId });
        res.status(201).json(insertedBook);
    } catch (error) {
        console.error('Error adding book:', error);
        res.status(500).send('Internal Server Error');
    }
});

// delete a book
app.delete('/books/:id', async (req, res) => {
    try {
        const bookId = req.params.id;
        
        // Choose the right query based on ID format
        let query;
        const numericId = Number(bookId);
        
        if (!isNaN(numericId)) {
            // If it's a valid number, query by numeric ID
            query = { _id: numericId };
        } else if (isValidObjectId(bookId)) {
            // If it's a valid ObjectId, query by ObjectId
            query = { _id: new ObjectId(bookId) };
        } else {
            // Neither a valid number nor ObjectId
            return res.status(400).send('Invalid book ID format');
        }
        
        const result = await db.collection('test_books').deleteOne(query);
        
        if (result.deletedCount === 0) {
            return res.status(404).send('Book not found');
        }
        
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).send('Internal Server Error');
    }
});

// patch a book
app.patch('/books/:id', async (req, res) => {
    try {
        const bookId = req.params.id;
        const updatedData = req.body;
        
        // Choose the right query based on ID format
        let query;
        const numericId = Number(bookId);
        
        if (!isNaN(numericId)) {
            // If it's a valid number, query by numeric ID
            query = { _id: numericId };
        } else if (isValidObjectId(bookId)) {
            // If it's a valid ObjectId, query by ObjectId
            query = { _id: new ObjectId(bookId) };
        } else {
            // Neither a valid number nor ObjectId
            return res.status(400).send('Invalid book ID format');
        }
        
        const result = await db.collection('test_books').updateOne(query, { $set: updatedData });
        
        if (result.matchedCount === 0) {
            return res.status(404).send('Book not found');
        }
        
        res.status(204).send('it updated soknan');
    } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).send('Internal Server Error');
    }
});



initializeApp();