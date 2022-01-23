import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';

const Comment = () => {

    const feedbackStored = useSelector(store => store.feedbackReducer);

    // setup grabbing value from form
    const [feedback, setFeedback] = useState(feedbackStored);

    // grab value form text field
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

    // fourth question
    return(
        <div>
            <h2>Any comments you want to leave?</h2>
            {/* text area for feedback comment */}
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField 
                    id="outlined-basic" 
                    label="Comments" 
                    variant="outlined"
                    name="comments"
                    onChange={handleInputChange}
                />
            </Box>
            {/* navigate to next page */}
            <Link to="/review">
                <Button  variant="contained" onClick={onSubmit}>
                    Next
                </Button>
            </Link>
        </div>
    );
}

export default Comment;