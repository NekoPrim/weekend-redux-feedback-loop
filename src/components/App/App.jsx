import React from 'react';
import axios from 'axios';
// import HashRouter, Route, and Link
import {HashRouter as Router, Route, Link} from 'react-router-dom';
// import components
import Feel from '../Feel/Feel';
import Understand from '../Understand/Understand';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';

import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {/* wrap in router */}
      <Router>
      {/* navigate to feel.jsx */}
      <Link to="/feel">Start!</Link>
        <Route exact path="/feel">
          <Feel />
        </Route>

        <Route exact path="/understand">
          <Understand />
        </Route>

        <Route exact path="/support">
          <Support />
        </Route>

        <Route>
          <Comment />
        </Route>
      </Router>
    </div>
  );
}

export default App;
