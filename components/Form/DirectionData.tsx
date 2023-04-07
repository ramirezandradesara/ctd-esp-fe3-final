import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";

export default function FormPersonalData() {
    return (

        <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Datos personales</Typography>
            <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Direccion y número"
                variant="outlined"
            />
            <br />
            <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Departamento, piso, etc."
                variant="outlined"
            />
            <br />
            <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Ciudad"
                variant="outlined"
            />
            <br />
            <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Provincia"
                variant="outlined"
            />
        </Box>
    );
}