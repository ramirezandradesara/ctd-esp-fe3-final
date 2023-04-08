import * as React from "react";
import { Box, Snackbar } from "@mui/material";
import Input from "./Input";
import { useFormContext } from "react-hook-form";
import {StepperButtons} from "./StepperButtons";
import router from "next/router";
import handler from "dh-marvel/pages/api/checkout";

export type PaymentDataProps = {
    activeStep: number;
    handleNext: (data: any) => void;
    handleBack: () => void;
};

export const PaymentData: React.FC<PaymentDataProps> = ({ activeStep, handleNext, handleBack }: PaymentDataProps) => {

    const { register, handleSubmit, formState: { errors }, control } = useFormContext()

    const onSubmit = async (data: any) => {
        handleNext(data);
        console.log(data);

        const formData = {
            nombre: data.nombre,
            apellido: data.apellido,
            email: data.email,

            direccion: data.direccion,
            dpto: data.dpto,
            ciudad: data.ciudad,
            provincia: data.provincia,
            codigopostal: data.codigopostal,

            numtarjeta: data.numtarjeta,
            nombretarjeta: data.nombretarjeta,
            fechadeexpiración: data.fechadeexpiración,
            codigodeseguridad: data.codigodeseguridad
        }

        // await fetch('https://my-marvel-store.vercel.app/api/checkout', {
        await fetch('http://localhost:3000/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(function (response) {
                console.log(response);
            })
        // .catch(function (error) {
        //     console.log(error.status);
        // })

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