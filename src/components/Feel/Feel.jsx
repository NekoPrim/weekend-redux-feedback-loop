import React, {useState} from 'react';
import {FormControl, FormControlLabel,Radio, RadioGroup} from '@mui/material';

const Feel = () => {

    // setup grabbing value from form
    const [feedback, setFeedback] = useState('');

    // grab value of 1 thru 5 feeling form
    const handleInputChange = (event) => {
        setFeedback({
            ...feedback,
            [event.target.name]: event.target.value
        });
    }

    // send data to feedbackReducer


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
        </div>
    )
}

export default Feel;