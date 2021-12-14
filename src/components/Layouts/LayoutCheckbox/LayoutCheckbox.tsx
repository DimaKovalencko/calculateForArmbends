import React, { ChangeEvent } from 'react';
import Checkbox from '@mui/material/Checkbox';
import InfoTooltip from "../../InfoTooltip";
import { ILayoutCheckbox } from "./interface";
import { addition } from "../../../constants/constants";

const LayoutCheckbox = (props: ILayoutCheckbox) => {
    const { header, title, checked, setChecked } = props;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div className="count_players">
            { title ?
                    <div className="wrapper_info">
                        <h3>{ header }</h3>
                        <InfoTooltip title={title} />
                    </div>
                    : <h3>{ header }</h3> }
            <div className="wrapper_result">
                { checked && title && <p>+{addition}p</p> }
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 26 } }}
                    {...label}
                />
            </div>
        </div>
    );
};

export default LayoutCheckbox;