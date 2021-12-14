import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ILayoutSelect } from "./interface";

const LayoutSelect = (props: ILayoutSelect) => {
    const { header, name, pricePlayer, countPlayer, setCountPlayer } = props;
    const handleChange = (event: any) => {
        setCountPlayer(event.target.value)
    };

    let numbers = [];
    for (let i = 1; i <= 30; i++) {
        numbers.push(i)
    }
    return (
        <div className="count_players">
            <h3>{ header }</h3>
            <div className="wrapper_select">
                { pricePlayer ? <p>{ pricePlayer }p</p> : "" }
                <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">{name}</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={countPlayer}
                        onChange={handleChange}
                        autoWidth
                        label={name}
                    >
                        <MenuItem value={0}>
                            <em></em>
                        </MenuItem>
                        { numbers.map(item =>
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};

export default LayoutSelect;