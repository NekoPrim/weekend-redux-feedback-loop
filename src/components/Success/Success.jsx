import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';

const Success = ()  => {

    // setup dispatch
    const dispatch = useDispatch();

    const onClear = () => {
        // clear feedback store
        dispatch({
            type: 'CLEAR'
        });
    }

    return (
        <div>
            <h1>Thank you for your feedback!</h1>
            {/* navigate to next page */}
            <Link to="/feel">
                <Button variant="contained" onClick={onClear}>
                    Redo feedback!
                </Button>
            </Link>
        </div>
    )
}

export default Success;