import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";
import { RecipesFormProps } from "./FormPersonalData";

type FormData = {
    nombre: string
    curso: string
    email: string
    fechaNacimiento: string
    calificaciones: string
}

// export default function DirectionData() {
export const DirectionData: React.FC<RecipesFormProps> = ({ setActiveStep }) => {
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