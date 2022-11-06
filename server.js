const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

app.options('*', cors());
app.use(express.json({ 'limit': '200mb' }));
app.use("/", express.static(path.join(__dirname,'docs')));

const libraryFile = path.join(__dirname,'docs/books.json');
let books = JSON.parse(fs.readFileSync(libraryFile));

function insertOrUpdateBook(book, insert) {
    const exists = books.some(bookT => bookT.id === book.id);
    if (exists === insert) {
        return false;
    } 
    if (book.fullSizeCover != null && book.fullSizeCover.startsWith("data:")) {
        const filename = `docs/cover/${book.id}.jpg`;
        const data = book.fullSizeCover.split(',')[1];
        fs.writeFileSync(filename, Buffer.from(data, 'base64'));
    }

    if (book.cover != null && book.cover.startsWith("data:")) {
        const filename = `docs/cover/${book.id}.thumbnail.jpg`;
        const data = book.cover.split(',')[1];
        fs.writeFileSync(filename, Buffer.from(data, 'base64'));
    }
    book.cover = `cover/${book.id}.thumbnail.jpg`;
    book.fullSizeCover = `cover/${book.id}.jpg`;

    if (insert) {
        books.unshift(book);
    } else {
        books = books.map(bookT => bookT.id == book.id ? book : bookT);
    }

    fs.writeFileSync(libraryFile, JSON.stringify(books, undefined, 4));
    return true;
}

app.get('/api', (req, res) => {
    res.sendStatus(200)
});

app.get('/api/book/', (req, res) => {
    res.json(books);
});

app.delete('/api/book/:id', (req, res) => {
    const book = books.filter(bookT => bookT.id === req.params.id)[0];
    if (book != null) {
        try {
            fs.unlinkSync(`docs/${book.cover}`);
            fs.unlinkSync(`docs/${book.fullSizeCover}`);
        } catch {
            ;
        }
        books = books.filter(bookT => bookT.id !== req.params.id);
        fs.writeFileSync(libraryFile, JSON.stringify(books, undefined, 4));
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }

});

app.get('/api/book/:id', (req, res) => {
    const book = books.filter(bookT => bookT.id === req.params.id)[0];
    if (book == null) {
        res.sendStatus(404);
    } else {
        res.json(book);
    }
});

app.put('/api/book/:id', (req, res) => {
    res.sendStatus(insertOrUpdateBook(req.body, false) ? 201: 404);
});

app.post('/api/book/', (req, res) => {
    res.sendStatus(insertOrUpdateBook(req.body, true) ? 200: 422);
});


app.listen(8000);
console.log('listening on port http://localhost:8000');
