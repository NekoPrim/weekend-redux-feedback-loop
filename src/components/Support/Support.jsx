import React from 'react';

import RadioForm from '../RadioForm/RadioForm';

const Support = () => {

    return(
        <div>
            <h2>How well are you being supported?</h2>
            <RadioForm i="support" next="comment" />
        </div>
    );
}

export default Support;