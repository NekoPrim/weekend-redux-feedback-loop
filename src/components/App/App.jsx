import React from 'react';
// import HashRouter, Route, and Link
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {Button} from '@mui/material';
// import components
import Feel from '../Feel/Feel';
import Understand from '../Understand/Understand';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import Success from '../Success/Success';

import './App.css';

function App() {

  return (
    <div className='App'>
      {/* wrap in router */}
      <Router>
        {/* user starts here */}
        <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
        <nav>
        <Button component={Link} to="/feel" variant="contained">Start</Button>
        </nav>

        <Route exact path="/feel">
          <Feel />
        </Route>

        <Route exact path="/understand">
          <Understand />
        </Route>

        <Route exact path="/support">
          <Support />
        </Route>

        <Route exact path="/comment">
          <Comment />
        </Route>

        <Route exact path="/review">
          <Review />
        </Route>

        <Route exact path="/complete">
          <Success />
        </Route>

      </Router>
    </div>
  );
}

export default App;
