import React from 'react';

const Validation = (props) =>
{
    let ValidationMessage= 'Text is long enough';

    if(props.inputLength <= 5)
    {
        ValidationMessage= 'Text is too short';
    }

    return (
   <div>
       <p>
           {ValidationMessage}
       </p>
   </div>
    );
}

export default Validation;