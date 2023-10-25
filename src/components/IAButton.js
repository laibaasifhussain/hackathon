import * as React from "react";
import Button from "@mui/material/Button";

export default function IAButton(props){
    const {variant, color, sx, children, onClick, classname} = props;
    return(
        <Button variant={variant} color={color} sx={sx} onClick={onClick} className={classname}>
            {children}
        </Button>
    );
}