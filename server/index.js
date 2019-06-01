const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

// const mockedBooks = require('./mockedBooks').mockedBooks;
const mockedBooks = [
  { 
    title: 'Mehmet',
    author: 'Baran',
    isbn: '1234567890',
    numberOfPages: 203,
    bookRate: 5 
  },
  {
    title: 'Zerya Betül',
    author: 'Baran',
    isbn: '0987654321',
    numberOfPages: 154,
    bookRate: 4,
  },
];

module.exports = {
  mockedBooks,
}

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

// POST http://localhost:4000/api/sendForm
// parameters sent with 
app.post('/api/sendForm', function(req, res) {
  const { title, author, isbn, numberOfPages, bookRate } = res.body;

  res.send(title + ' ' + author + ' ' + isbn + ' ' +
  numberOfPages + ' ' + bookRate);
});

app.get('/api/getBooks', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ addedBooks: mockedBooks }));
}); 

app.listen(4000, () =>
  console.log('Express server is running on localhost:4000')
);