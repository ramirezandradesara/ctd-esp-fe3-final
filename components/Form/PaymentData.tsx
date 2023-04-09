import * as React from "react";
import { Box, Snackbar } from "@mui/material";
import Input from "./Input";
import { useFormContext } from "react-hook-form";
import {StepperButtons} from "./StepperButtons";

export type PaymentDataProps = {
    activeStep: number;
    handleNext: (data: any) => void;
    handleBack: () => void;
};

export const PaymentData: React.FC<PaymentDataProps> = ({ activeStep, handleNext, handleBack }: PaymentDataProps) => {

    const { register, handleSubmit, formState: { errors }, control } = useFormContext()

    const onSubmit = async (data: any) => {
        // handleNext(data);
        // console.log(data);

        const formData = {
            customer: {
                name: data.nombre,
                lastname: data.apellido,
                email: data.email,
                address: {
                    address1: data.direccion,
                    address2: 'data.dpto',
                    city: data.ciudad,
                    state: data.provincia,
                    zipCode: data.codigopostal,
                }
            },
            card: {
                number: data.numtarjeta,
                cvc: data.codigodeseguridad,
                expDate: data.fechadeexpiración,
                nameOnCard: data.nombretarjeta,
            },
            order: {
                name: 'string',
                image: 'string',
                price: 1
            }
        }

        const formData2 = {
            customer: {
                name: 'sara',
                lastname: 'sara',
                email: 'sara',
                address: {
                    address1: 'sara',
                    address2: 'data.dpto',
                    city: 'sara',
                    state: 'sara',
                    zipCode: 'sara',
                }
            },
            card: {
                number: '4242424242424242',
                cvc: 'sara',
                expDate: 'sara',
                nameOnCard: 'sara',
            },
            order: {
                name: 'string',
                image: 'string',
                price: 1
            }
        }

        // await fetch('https://my-marvel-store.vercel.app/api/checkout', {
        await fetch('/api/checkout', {
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