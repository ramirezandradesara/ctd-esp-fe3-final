import * as React from "react";
import { Box } from "@mui/material";
import Input from "./Input";
import { useFormContext } from "react-hook-form";
import { StepperButtons } from "./StepperButtons";

export type PaymentDataProps = {
    activeStep: number;
    handleNext: () => void;
    handleBack: () => void;
    onSubmit: (data: any) => void;
};

export const PaymentData: React.FC<PaymentDataProps> = ({ activeStep, handleNext, handleBack, onSubmit }: PaymentDataProps) => {

    const { register, handleSubmit, formState: { errors }, control } = useFormContext()

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    required
                    label="Número de tarjeta"
                    control={control}
                    name="numtarjeta"
                    error={Boolean(errors.numtarjeta)}
                    helperText={errors.numtarjeta?.type === 'required' ? 'El número de la tarjeta es requerido' : ''}
                    rules={{
                        required: true
                    }}
                />
                <Input
                    required
                    label="Nombre como aparece en la tarjeta"
                    control={control}
                    name="nombretarjeta"
                    error={Boolean(errors.nombretarjeta)}
                    helperText={errors.nombretarjeta?.type === 'required' ? 'El nombre de la tarjeta es requerido' : ''}
                    rules={{
                        required: true
                    }}
                />
                <Input
                    required
                    label="Fecha de expiración"
                    control={control}
                    name="fechadeexpiración"
                    error={Boolean(errors.fechadeexpiración)}
                    helperText={errors.fechadeexpiración?.type === 'required' ? 'La fecha de expiración es requerida' : ''}
                    rules={{
                        required: true
                    }}
                />
                <Input
                    required
                    label="Código de seguridad"
                    control={control}
                    name="codigodeseguridad"
                    error={Boolean(errors.codigodeseguridad)}
                    helperText={errors.codigodeseguridad?.type === 'required' ? 'El código de seguridad es requerido' : ''}
                    rules={{
                        required: true
                    }}
                />
                <StepperButtons
                    activeStep={activeStep}
                    handleNext={handleSubmit(onSubmit)}
                    handleBack={handleBack}
                />
            </form >
        </Box>
    );
}