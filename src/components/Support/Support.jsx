import React from 'react';

import RadioForm from '../RadioForm/RadioForm';

const Support = () => {

    // third question
    return(
        <div>
            <h2>How well are you being supported?</h2>
            {/* navigate to form and send props */}
            <RadioForm i="support" next="comment" />
        </div>
    );
}

export default Support;