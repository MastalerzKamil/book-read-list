import React from 'react'
import { FormContainer } from 'containers/UpdateList';
import { BooksListContainer } from 'containers/UpdateList';

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