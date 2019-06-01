import { post, get } from './methods';

export function postFormsData({title, author, isbn, numberOfPages, rate}) {
  return post('/api/sendForm', {title, author, isbn, numberOfPages, rate});
}

export function getAddedBooks() {
  return get('/api/getBooks');
}