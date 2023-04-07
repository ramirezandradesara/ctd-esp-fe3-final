import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";

export default function PaymentData() {
    return (

        <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Datos personales</Typography>
            <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Nombre como aparece en la tarjeta"
                variant="outlined"
            />
            <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Número de tarjeta"
                variant="outlined"
            />
            <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Exp MM/YY"
                variant="outlined"
            />
            <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="CVV"
                variant="outlined"
            />
        </Box>
    );
}