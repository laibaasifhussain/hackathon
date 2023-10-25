import React, { ChangeEvent } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const IASelect = (props) => {
    const { label, options, onChange , color, className} = props;
  return (
    <FormControl variant="outlined" fullWidth
    style={{
      borderRadius: "5px",
      margin: "8px 0",
      width: "100%",
      color: "red",
    }}>
      <InputLabel>{label}</InputLabel>
      <Select
        onChange={onChange}
        color={color}
        label={label}
        className={className}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default IASelect;
