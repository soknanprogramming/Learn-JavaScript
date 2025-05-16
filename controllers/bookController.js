// controllers/bookController.js
const { ObjectId } = require('mongodb');

function isValidObjectId(id) {
    return ObjectId.isValid(id) && String(new ObjectId(id)) === id;
}

exports.getAllBooks = async (req, res) => {
    try {
        const books = await req.db.collection('test_books').find().limit(10).toArray();
        res.json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.getBookById = async (req, res) => {
    try {
        const bookId = req.params.id;

        let query;
        const numericId = Number(bookId);

        if (!isNaN(numericId)) {
            query = { _id: numericId };
        } else if (isValidObjectId(bookId)) {
            query = { _id: new ObjectId(bookId) };
        } else {
            return res.status(400).send('Invalid book ID format');
        }

        const book = await req.db.collection('test_books').findOne(query);
        if (!book) return res.status(404).send('Book not found');

        res.json(book);
    } catch (error) {
        console.error('Error fetching book:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.createBook = async (req, res) => {
    try {
        const newBook = req.body;
        const result = await req.db.collection('test_books').insertOne(newBook);
        const insertedBook = await req.db.collection('test_books').findOne({ _id: result.insertedId });
        res.status(201).json(insertedBook);
    } catch (error) {
        console.error('Error adding book:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const bookId = req.params.id;

        let query;
        const numericId = Number(bookId);

        if (!isNaN(numericId)) {
            query = { _id: numericId };
        } else if (isValidObjectId(bookId)) {
            query = { _id: new ObjectId(bookId) };
        } else {
            return res.status(400).send('Invalid book ID format');
        }

        const result = await req.db.collection('test_books').deleteOne(query);

        if (result.deletedCount === 0) return res.status(404).send('Book not found');
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.updateBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const updatedData = req.body;

        let query;
        const numericId = Number(bookId);

        if (!isNaN(numericId)) {
            query = { _id: numericId };
        } else if (isValidObjectId(bookId)) {
            query = { _id: new ObjectId(bookId) };
        } else {
            return res.status(400).send('Invalid book ID format');
        }

        const result = await req.db.collection('test_books').updateOne(query, { $set: updatedData });

        if (result.matchedCount === 0) return res.status(404).send('Book not found');
        res.status(204).send();
    } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.getPaginatedBooks = async (req, res) => {
    try {
        const page = parseInt(req.params.page, 10);
        const limit = 3;
        const skip = (page - 1) * limit;

        const books = await req.db.collection('test_books').find().skip(skip).limit(limit).toArray();
        res.json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).send('Internal Server Error');
    }
};