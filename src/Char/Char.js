import React from 'react';
import Radium from 'radium';

const Char = (props) =>
{
    const styling={
        display : 'inline-block',
        padding : '16px',
        margin : '16px',
        border : '1px solid black',
        textAlign :'center',
        ':hover': {        
            backgroundColor: 'darkgreen',
            cursor: 'pointer',
        }
    };

    return (
        <div style={styling} onClick={props.clicked}>
            {props.character}
        </div>
    );
}

export default Radium(Char);