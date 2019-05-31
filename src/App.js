import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from 'components/Header';
import Home from 'pages/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='App__top'>
          <Header />
          <Route exact path='/' component={Home} />
        </div>
      </div>
    </Router>
  );
}

export default App;
