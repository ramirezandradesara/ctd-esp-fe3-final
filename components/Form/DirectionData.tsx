import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useFieldArray, useForm, useFormContext } from "react-hook-form";
import Input from "./Input";
import { StepperButtons } from "./StepperButtons";

export type DirectionDataProps = {
    activeStep: number;
    handleNext: () => void;
    handleBack: () => void;
};

export const DirectionData: React.FC<DirectionDataProps> = ({ activeStep, handleNext, handleBack }: DirectionDataProps) => {

    const { register, handleSubmit, formState: { errors }, control } = useFormContext()

    return (
        <Box>
            <form onSubmit={handleSubmit(handleNext)}>
                <Input
                    required
                    label="Dirección"
                    control={control}
                    name="direccion"
                    error={Boolean(errors.direccion)}
                    helperText={errors.direccion?.type === 'required' ? 'El dirección es requerido' : ''}
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
                    helperText={errors.ciudad?.type === 'required' ? 'El ciudad es requerido' : ''}
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
                    helperText={errors.provincia?.type === 'required' ? 'El provincia es requerido' : ''}
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
                    helperText={errors.codigopostal?.type === 'required' ? 'El código postal es requerido' : ''}
                    rules={{
                        required: true
                    }}
                />
                <StepperButtons
                    activeStep={activeStep}
                    handleNext={handleSubmit(handleNext)}
                    handleBack={handleBack}
                />
            </form>
        </Box>
    );
}