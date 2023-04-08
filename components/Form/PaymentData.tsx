import * as React from "react";
import { Box } from "@mui/material";
import Input from "./Input";
import { useFormContext } from "react-hook-form";
import StepperButtons from "./StepperButtons";

export type PaymentFormProps = {
    activeStep: number;
    handleNext: (data: any) => void;
    handleBack: () => void;
};

export const PaymentData: React.FC<PaymentFormProps> = ({ activeStep, handleNext, handleBack }: PaymentFormProps) => {

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
                    label="Número de tarjeta"
                    control={control}
                    name="numtarjeta"
                    error={Boolean(errors.numtarjeta)}
                    helperText={errors.numtarjeta?.type === 'required' ? 'Este campo es requerido' : ''}
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
                    helperText={errors.nombretarjeta?.type === 'required' ? 'Este campo es requerido' : ''}
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
                    helperText={errors.fechadeexpiración?.type === 'required' ? 'Este campo es requerido' : ''}
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
                    helperText={errors.codigodeseguridad?.type === 'required' ? 'Este campo es requerido' : ''}
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