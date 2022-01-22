import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {FormControl, FormControlLabel,Radio, RadioGroup} from '@mui/material';

const Feel = () => {

    // setup grabbing value from form
    const [feedback, setFeedback] = useState('');

    // grab value of 1 thru 5 feeling form
    const handleInputChange = (event) => {
        setFeedback({
            [event.target.name]: event.target.value
        });
    }

    // setup dispatch
    const dispatch = useDispatch();

    // function called onClick button
    const onSubmit = () => {
        console.log('in onSubmit Feel', feedback);

        // send data to feedbackReducer
        dispatch({
            type: 'ADD_TO',
            payload: feedback
        });
    }

    return(
        <div>
            <h2>How are you feeling today?</h2>
            <FormControl>
                {/* select option 1 through 5 */}
                <RadioGroup>
                    <FormControlLabel
                        control={<Radio />}
                        label="1"
                        name="feeling"
                        value="1"
                        onChange={handleInputChange}
                    />
                    <FormControlLabel
                        control={<Radio />}
                        label="2"
                        name="feeling"
                        value="2"
                        onChange={handleInputChange}
                    />
                    <FormControlLabel
                        control={<Radio />}
                        label="3"
                        name="feeling"
                        value="3"
                        onChange={handleInputChange}
                    />
                    <FormControlLabel
                        control={<Radio />}
                        label="4"
                        name="feeling"
                        value="4"
                        onChange={handleInputChange}
                    />
                    <FormControlLabel
                        control={<Radio />}
                        label="5"
                        name="feeling"
                        value="5"
                        onChange={handleInputChange}
                    />
                </RadioGroup>
            </FormControl>
            <div>
                <Router>
                <Link to="/understand">
                    <button variant="contained" onClick={onSubmit}>
                        Next
                    </button>
                </Link>
                <Route exact path="/understand"></Route>
                </Router>
            </div>
        </div>
    )
}

export default Feel;