import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function IATypography(props){
    const {color, variant, label} = props;
    return(
        <Typography variant={variant} color={color}>{label}</Typography>
    );
}