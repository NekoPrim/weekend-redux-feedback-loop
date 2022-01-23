import React, {useEffect} from 'react';

import RadioForm from '../RadioForm/RadioForm';

const Feel = () => {

    // first question
    return(
        <div>
            <h2>How are you feeling today?</h2>
            {/* navigate to form and send props */}
            <RadioForm i="feeling" next="understand" />
        </div>
    );
}

export default Feel;