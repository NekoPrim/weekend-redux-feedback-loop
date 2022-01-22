import React from 'react';

import RadioForm from '../RadioForm/RadioForm';

const Feel = () => {

    return(
        <div>
            <h2>How are you feeling today?</h2>
            <RadioForm i="feeling" next="understand" />
        </div>
    );
}

export default Feel;