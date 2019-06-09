import React from 'react';
import './DisplayCounter.css';

const DisplayCounter=(props)=>{
    return(
        <div className="DisplayCounter">
                Counter : {props.value}
        </div>

    )
}
export default DisplayCounter;