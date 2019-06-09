import React from 'react';
import './ChangeCounter.css';

const ChangeCounter=(props)=>{
    return(
        <div className="ChangeCounter" onClick={props.click}>
            {props.label}
        </div>
    )
}
export default ChangeCounter;