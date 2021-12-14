import React, { FC } from 'react';
import { IText } from "./interface";

const Text: FC<IText> = ({ uppercase = true, text }) => {
    const value = uppercase ? "uppercase" : "lowercase"
    return <p style={{textTransform: value}}>{ text }</p>
};

export default Text;