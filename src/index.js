import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//setup redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// created feedback store variable
const feedback = {
    feeling: '', 
    understanding: '',
    support: '',
    comments: ''
};

// setup reducer for feedback
const feedbackReducer = (state = feedback, action) => {
    switch(action.type) {
        case 'ADD_TO':
            return {...state, ...action.payload};
        case 'CLEAR':
            return feedback;
    }
    return state;
};

// setup store
const store = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
);

// setup Provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

// Redux store
// {
//     feeling: 3,
//     understanding: 1,
//     support: 6,
//     comments: 'YOLO'
// }
