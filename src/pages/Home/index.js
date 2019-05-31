import React from 'react'
import Form from 'components/Form';
import BooksList from 'components/BooksList';

import './index.css';

function Home() {
  return (
  <div className='Home'>
    <div className='Home__section'>
      <Form />
    </div>
    <div className='Home__section'>
      <BooksList />
    </div>
  </div>
  );
}

export default Home;