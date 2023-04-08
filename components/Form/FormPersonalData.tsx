import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";

type FormData = {
    nombre: string
    apellido: string
    email: string
}

export type RecipesFormProps = {
    setActiveStep: (step: number) => void
}

// export default function FormPersonalData<RecipesFormProps>({ setActiveStep }) {
export const FormPersonalData: React.FC<RecipesFormProps> = ({ setActiveStep }) => {

    const { register, handleSubmit, formState: { isSubmitSuccessful, errors }, control, reset, getValues } = useForm<FormData>({
        mode: 'onBlur',
        defaultValues: {
            nombre: '',
            apellido: '',
            email: '',
        }
    });

    return (
        <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Datos personales</Typography>
            <TextField
                required
                // error
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Nombre"
                variant="outlined"
                // helperText="Este campo es requerido"
                {...register("nombre", { required: true })}
            />
            {errors.nombre && <span>Este campo es requerido</span>}
            <br />
            <TextField
                required
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Apellido"
                variant="outlined"
                {...register("apellido", { required: true })}
            />
            {errors.apellido && <span>Este campo es requerido</span>}
            <br />
            <TextField
                required
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Email"
                variant="outlined"
                {...register("email", { required: true })}
            />
            {errors.email && <span>Este campo es requerido</span>}
        </Box>
    );
}