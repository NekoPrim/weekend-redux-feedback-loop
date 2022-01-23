import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {FormControl, FormControlLabel,Radio, RadioGroup, Button} from '@mui/material';

// this form is used in Feel, Understand, and Support components
// i prop sets name in FormControlLabel
// next prop sets Link to for Next button
const RadioForm = ({i, next}) => {

    // get access to global variable
    const feedbackStored = useSelector(store => store.feedbackReducer);

    // set feedback reducer to useState so it can be set later
    const [feedback, setFeedback] = useState(feedbackStored);

    // grab value of 1 thru 5 radio form
    const handleInputChange = (event) => {
        setFeedback({
            ...feedback,
            [event.target.name]: event.target.value
        });
    }

    // setup dispatch
    const dispatch = useDispatch();

    // function called by onClick button
    const onSubmit = (event) => {
        console.log('feedback from next button', feedback);

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
                    <RadioGroup required row>
                        {
                        [1, 2, 3, 4, 5].map((x, index) => (
                            <FormControlLabel key={index}
                                control={<Radio required={true} />}
                                label={x}
                                name={i}
                                value={x}
                                onChange={handleInputChange}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            <div>
            {/* navigate to next page */}
            <Link to={`/${next}`}>
                <Button disabled={!feedback[i]} variant="contained" onClick={onSubmit}>
                    Next
                </Button>
            </Link>
        </div>
    </div>
    )
}

export default RadioForm;