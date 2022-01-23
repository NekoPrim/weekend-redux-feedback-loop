import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import * as React from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Review = () => {

    // get access to global variable
    const feedbackStored = useSelector(store => store.feedbackReducer);
    console.log('Review:', feedbackStored);

    // setup dispatch
    const dispatch = useDispatch();

    // called with onClick button
    const handleSubmit = () => {
        
        // send data to server side
        axios.post('/feedback', feedbackStored)
            .then(() => {
                // tell client of success
                console.log('axios POST success!');

                // clear feedback store
                dispatch({
                    type: 'CLEAR'
                });
            })
            .catch((err) => {
                // tell client of failure
                console.log('axios POST ERROR!', err);
            });
    }

    // render completed feedback onto DOM
    return(
        <>
        <h3>Your feedback</h3>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center">Feeling</TableCell>
                <TableCell align="center">Understanding</TableCell>
                <TableCell align="center">Support</TableCell>
                <TableCell align="center">Comments</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            
                <TableRow>
                <TableCell align="center">{feedbackStored.feeling}</TableCell>
                <TableCell align="center">{feedbackStored.understanding}</TableCell>
                <TableCell align="center">{feedbackStored.support}</TableCell>
                <TableCell align="center">{feedbackStored.comments}</TableCell>
                </TableRow>
            
            </TableBody>
        </Table>
    </TableContainer>
    
    <Link to="/home">
    <button onClick={handleSubmit}>Submit</button>
    </Link>
    </>
    );
}

export default Review;