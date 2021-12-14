import React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from "../../assets/icons/info-icon.png";
import { ITooltip } from "./interface";

import './InfoTooltip.css';

const InfoTooltip = (props: ITooltip) => {
    return (
        <Tooltip title={props.title}>
            <IconButton>
                <img className="info-icon" src={InfoIcon} alt="info"/>
            </IconButton>
        </Tooltip>
    );
};

export default InfoTooltip;