import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useFieldArray, useForm, useFormContext, useFormState } from "react-hook-form";
import Input from "./Input";
import StepperButtons from "./StepperButtons";

export type CustomerDataProps = {
    data: any;
    activeStep: number;
    handleNext: (data: any) => void;
};

export const FormPersonalData: React.FC<CustomerDataProps> = ({ data, activeStep, handleNext }: CustomerDataProps) => {

    const { register, handleSubmit, formState: { errors }, control } = useFormContext()

    const onSubmit = (data: any) => {
        handleNext(data);
        console.log(data);
    };

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    required
                    label="Nombre"
                    control={control}
                    name="nombre"
                    error={Boolean(errors.nombre)}
                    helperText={errors.nombre?.type === 'required' ? 'Este campo es requerido' : ''}
                    rules={{
                        required: true
                    }}
                />
                <Input
                    required
                    label="Apellido"
                    control={control}
                    name="apellido"
                    error={Boolean(errors.apellido)}
                    helperText={errors.apellido?.type === 'required' ? 'Este campo es requerido' : ''}
                    rules={{
                        required: true
                    }}
                />
                <Input
                    required
                    label="Email"
                    control={control}
                    name="email"
                    error={Boolean(errors.email)}
                    helperText={errors.email?.type === 'required' ? 'Este campo es requerido' : ''}
                    rules={{
                        required: true
                    }}
                />               
                <StepperButtons
                    activeStep={activeStep}
                    handleNext={handleSubmit(onSubmit)}
                    handleBack={() => {}}
                />
            </form>
        </Box>
    );
}