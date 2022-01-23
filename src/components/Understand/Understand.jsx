import React from 'react';

import RadioForm from '../RadioForm/RadioForm';

const Understand = () => {

    // second question
    return(
        <div>
            <h2>How well are you understanding the content?</h2>
            {/* navigate to form and send props */}
            <RadioForm i="understanding" next="support" />
        </div>
    );
}

export default Understand;