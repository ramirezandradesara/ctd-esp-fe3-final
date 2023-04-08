import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { setActiveStepProps } from "./FormPersonalData";

// export default function PaymentData() {
export const PaymentData: React.FC<setActiveStepProps> = ({ setActiveStep }) => {

    return (
        <Box>
            <TextField
                required
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Nombre como aparece en la tarjeta"
                variant="outlined"
            />
            <TextField
                required
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Número de tarjeta"
                variant="outlined"
            />
            <TextField
                required
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Exp MM/YY"
                variant="outlined"
            />
            <TextField
                required
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="CVV"
                variant="outlined"
            />
        </Box>
    );
}