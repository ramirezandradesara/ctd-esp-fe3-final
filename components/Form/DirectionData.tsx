import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useFieldArray, useForm, useFormContext } from "react-hook-form";
import Input from "./Input";
import { StepperButtons } from "./StepperButtons";

export type DirectionDataProps = {
    activeStep: number;
    handleNext: (data: any) => void;
    handleBack: () => void;
};

export const DirectionData: React.FC<DirectionDataProps> = ({ activeStep, handleNext, handleBack }: DirectionDataProps) => {

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
                    label="Dirección"
                    control={control}
                    name="direccion"
                    error={Boolean(errors.direccion)}
                    helperText={errors.direccion?.type === 'required' ? 'Este campo es requerido' : ''}
                    rules={{
                        required: true
                    }}
                />
                <Input

                    label="Dpto, piso, etc. (opcional)"
                    control={control}
                    name="dpto"
                />
                <Input
                    required
                    label="Ciudad"
                    control={control}
                    name="ciudad"
                    error={Boolean(errors.ciudad)}
                    helperText={errors.ciudad?.type === 'required' ? 'Este campo es requerido' : ''}
                    rules={{
                        required: true
                    }}
                />
                <Input
                    required
                    label="Provincia"
                    control={control}
                    name="provincia"
                    error={Boolean(errors.provincia)}
                    helperText={errors.provincia?.type === 'required' ? 'Este campo es requerido' : ''}
                    rules={{
                        required: true
                    }}
                />
                <Input
                    required
                    label="Código postal"
                    control={control}
                    name="codigopostal"
                    error={Boolean(errors.codigopostal)}
                    helperText={errors.codigopostal?.type === 'required' ? 'Este campo es requerido' : ''}
                    rules={{
                        required: true
                    }}
                />
                <StepperButtons
                    activeStep={activeStep}
                    handleNext={handleSubmit(onSubmit)}
                    handleBack={handleBack}
                />
            </form>
        </Box>
    );
}