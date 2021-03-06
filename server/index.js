const express = require('express');
const pino = require('express-pino-logger')();
const cors = require('cors');

const frontendUrl = require('./env').frontendUrl;
const mockedBooks = require('./mockedBooks').mockedBooks;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
  origin: frontendUrl
}));
app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

// POST http://localhost:4000/api/sendForm
// parameters sent with 
app.post('/api/sendForm', function(req, res) {
  const { title, author, isbn, numberOfPages, bookRate } = req.body;

  mockedBooks.push({ title, author, isbn, numberOfPages, bookRate });
  res.send(JSON.stringify({ addedBook: req.body }));
});

app.get('/api/getBooks', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ addedBooks: mockedBooks }));
}); 

app.listen(4000, () =>
  console.log('Express server is running on localhost:4000')
);