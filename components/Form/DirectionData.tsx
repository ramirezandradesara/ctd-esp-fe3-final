import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";
import { setActiveStepProps } from "./FormPersonalData";

type FormData = {
    nombre: string
    curso: string
    email: string
    fechaNacimiento: string
    calificaciones: string
}

export const DirectionData: React.FC<setActiveStepProps> = ({ setActiveStep }) => {
    return (
        <Box>
            <TextField
                required
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Direccion y número"
                variant="outlined"
            />
            <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Departamento, piso, etc."
                variant="outlined"
            />
            <TextField
                required
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Ciudad"
                variant="outlined"
            />
            <TextField
                required
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Provincia"
                variant="outlined"
            />
        </Box>
    );
}