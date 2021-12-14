import React from 'react';
import { IDisplayResult } from "./interface";

const DisplayResult = (props: IDisplayResult) => {
    return (
        <div className="display">
            <h3>{ props.header }</h3>
            <div className="result" style={{fontSize: "30px", textAlign: "center"}}>{ props.result }p</div>
        </div>
    );
};

export default DisplayResult;