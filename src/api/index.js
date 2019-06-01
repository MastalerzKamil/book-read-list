import { post, get } from './methods';

export function postFormsData({title, author, isbn, numberOfPages, bookRate}) {
  console.log({title, author, isbn, numberOfPages, bookRate});
  return post('/api/sendForm', {title, author, isbn, numberOfPages, bookRate});
}

export function getAddedBooks() {
  return get('/api/getBooks');
}