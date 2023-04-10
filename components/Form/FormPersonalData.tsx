import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useFieldArray, useForm, useFormContext, useFormState } from "react-hook-form";
import Input from "./Input";
import {StepperButtons} from "./StepperButtons";

export type FormPersonalDataProps = {
    activeStep: number;
    handleNext: () => void;
};

export const FormPersonalData: React.FC<FormPersonalDataProps> = ({ activeStep, handleNext }: FormPersonalDataProps) => {

    const { register, handleSubmit, formState: { errors }, control } = useFormContext()

    return (
        <Box>
            <form onSubmit={handleSubmit(handleNext)}>
                <Input
                    required
                    label="Nombre"
                    control={control}
                    name="nombre"
                    error={Boolean(errors.nombre)}
                    helperText={errors.nombre?.type === 'required' ? 'El nombre es requerido' : ''}
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
                    helperText={errors.apellido?.type === 'required' ? 'El apellido es requerido' : ''}
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
                    helperText={errors.email?.type === 'required' ? 'El email es requerido' : ''}
                    rules={{
                        required: true
                    }}
                />               
                <StepperButtons
                    activeStep={activeStep}
                    handleNext={handleSubmit(handleNext)}
                    handleBack={() => {}}
                />
            </form>
        </Box>
    );
}