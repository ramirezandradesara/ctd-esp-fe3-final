import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useFieldArray, useForm, useFormState } from "react-hook-form";

type FormData = {
    nombre: string
    apellido: string
    email: string
}

export type setActiveStepProps = {
    setActiveStep: (step: number) => void
}

export type CustomerDataProps = {
    data: any;
    activeStep: number;
    setActiveStep: (step: number) => void
    setError: (error: boolean) => void
    handleSubmitCustomerForm: (data: any) => void;
};

export const FormPersonalData: React.FC<CustomerDataProps> = ({ setActiveStep }) => {

    const { register, handleSubmit, formState: { isSubmitSuccessful, errors }, control, reset, getValues } = useForm<FormData>({
        mode: 'onBlur',
        defaultValues: {
            nombre: '',
            apellido: '',
            email: '',
        }
    });


    React.useEffect(() => {

    }, [])

    return (
        <Box>
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
            <TextField
                required
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Apellido"
                variant="outlined"
                {...register("apellido", { required: true })}
            />
            {errors.apellido && <span>Este campo es requerido</span>}
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