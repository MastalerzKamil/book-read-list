import { post } from './utils';

export function postFormsData({title, author, isbn, numberOfPages, rate}) {
  return post('/api/sendForm', {title, author, isbn, numberOfPages, rate});
}