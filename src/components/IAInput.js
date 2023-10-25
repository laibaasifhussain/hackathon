import { TypeSpecimen } from "@mui/icons-material";
import { TextField } from "@mui/material";

export default function IAInput(props){
    const {variant, label, color, value, onChange, sx, classname,helperText, type} = props;
    return(
       <TextField variant = {variant} label={label} color={color} value={value} onChange={onChange} sx={sx} className={classname} helperText={helperText} type={type}/>
    );
}