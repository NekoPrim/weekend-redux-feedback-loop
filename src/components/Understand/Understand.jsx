import React from 'react';

import RadioForm from '../RadioForm/RadioForm';

const Understand = () => {

    return(
        <div>
            <h2>How well are you understanding the content?</h2>
            <RadioForm i="understanding" next="support" />
        </div>
    );
}

export default Understand;