import React from 'react';
import axios from 'axios';
// import HashRouter, Route, and Link
import {HashRouter as Router, Route, Link} from 'react-router-dom';
// import feel.jsx
import Feel from '../Feel/Feel';

import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {/* navigate to feel.jsx */}
      <Router>
      <Link to="/feel">Start!</Link>
      {/* wrap in router */}
        <Route exact path="/feel">
          <Feel />
        </Route>
      </Router>
    </div>
  );
}

export default App;
