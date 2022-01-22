import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {FormControl, FormControlLabel,Radio, RadioGroup} from '@mui/material';

const RadioForm = ({i, next}) => {

    // get access to global variable
    const feedbackStored = useSelector(store => store.feedbackReducer);

    // setup grabbing value from form
    const [feedback, setFeedback] = useState(feedbackStored);

    // grab value of 1 thru 5 feeling form
    const handleInputChange = (event) => {
        setFeedback({
            ...feedback,
            [event.target.name]: event.target.value
        });
    }

    // setup dispatch
    const dispatch = useDispatch();

    // function called onClick button
    const onSubmit = () => {
        console.log('in onSubmit Understand', feedback);

        // send data to feedbackReducer
        dispatch({
            type: 'ADD_TO',
            payload: feedback
        });
    }

    return(
        <div>
            <FormControl>
                    {/* select option 1 through 5 */}
                    <RadioGroup>
                        {
                        [1, 2, 3, 4, 5].map((x, index) => (
                            <FormControlLabel key={index}
                                control={<Radio />}
                                label={x}
                                name={i}
                                value={x}
                                onChange={handleInputChange}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            <div>
            <Link to={`/${next}`}>
                <button variant="contained" onClick={onSubmit}>
                    Next
                </button>
            </Link>
        </div>
    </div>
    )
}

export default RadioForm;