import React from 'react'
import { FormContainer } from 'container/UpdateList';
import { BooksListContainer } from 'container/UpdateList';

import './index.css';

function Home() {
  return (
  <div className='Home'>
    <div className='Home__section'>
      <FormContainer />
    </div>
    <div className='Home__section'>
      <BooksListContainer />
    </div>
  </div>
  );
}

export default Home;