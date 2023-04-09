import { act, render, screen, waitFor } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { PaymentData } from "./PaymentData";
import userEvent from "@testing-library/user-event";

const Wrapper = ({ children }: any) => {
    // Obtenemos los métodos del formulario mediante useForm
    const methods = useForm({
        mode: "all",
        defaultValues: {
            nombre: "",
        },
    });

    // Envolvemos los "hijos" del componente dentro del FormProvider
    return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('PaymentData.spec.tsx', () => {
    describe('when rendering default', () => {
        it('should render the inputs', () => {
            render(
                <Wrapper>
                    <PaymentData
                        handleNext={() => { }}
                        activeStep={1}
                        handleBack={() => { }}
                    />
                </Wrapper>
            )

            const cardNumInput = screen.getByRole('textbox', { name: /Número de tarjeta */i })
            const cardNameInput = screen.getByRole('textbox', { name: /Nombre como aparece en la tarjeta/i})
            const expirationDateInput = screen.getByRole('textbox', { name: /Fecha de expiración */i })
            const cvvInput = screen.getByRole('textbox', { name: /Código de seguridad */i })

            expect(cardNumInput).toBeInTheDocument();
            expect(cardNameInput).toBeInTheDocument();
            expect(expirationDateInput).toBeInTheDocument();
            expect(cvvInput).toBeInTheDocument();
        })
    })

    describe('when entering wrong values', () => {
        it("should render inputs error when doesn't fill form", async () => {
            render(
                <Wrapper>
                    <PaymentData
                        handleNext={() => { }}
                        activeStep={1}
                        handleBack={() => { }}
                    />
                </Wrapper>
            )

            const nextButton = screen.getByText(/siguiente/i);
            expect(nextButton).toBeInTheDocument();

            act(() => {
                userEvent.click(nextButton);
            })

            await waitFor(() => expect(screen.getByText("El número de la tarjeta es requerido")).toBeInTheDocument());
            await waitFor(() => expect(screen.getByText("El nombre de la tarjeta es requerido")).toBeInTheDocument());
            await waitFor(() => expect(screen.getByText("La fecha de expiración es requerida")).toBeInTheDocument());
            await waitFor(() => expect(screen.getByText('El código de seguridad es requerido')).toBeInTheDocument());
        })
    })

    describe('when entering correct values', () => {
        it("should not render inputs error", async () => {
            render(
                <Wrapper>
                    <PaymentData
                        handleNext={() => { }}
                        activeStep={1}
                        handleBack={() => { }}
                    />
                </Wrapper>
            );

            const cardNumInput = screen.getByRole<HTMLInputElement>('textbox', { name: /Número de tarjeta */i })
            const cardNameInput = screen.getByRole<HTMLInputElement>('textbox', { name: /Nombre como aparece en la tarjeta/i})
            const expirationDateInput = screen.getByRole<HTMLInputElement>('textbox', { name: /Fecha de expiración */i })
            const cvvInput = screen.getByRole<HTMLInputElement>('textbox', { name: /Código de seguridad */i })
            const nextButton = screen.getByText(/siguiente/i);

            act(() => {
                userEvent.type(cardNumInput, "4242424242424242")
                userEvent.type(cardNameInput, "SARA RAMIREZ")
                userEvent.type(expirationDateInput, "11/23")
                userEvent.type(cvvInput, "123")
                userEvent.click(nextButton);
            })

            await waitFor(() => expect(screen.queryByText("El número de la tarjeta es requerido")).not.toBeInTheDocument());
            await waitFor(() => expect(screen.queryByText("El nombre de la tarjeta es requerido")).not.toBeInTheDocument());
            await waitFor(() => expect(screen.queryByText("La fecha de expiración es requerida")).not.toBeInTheDocument());
            await waitFor(() => expect(screen.queryByText("El código de seguridad es requerido")).not.toBeInTheDocument());

            // await waitFor(() =>  expect(cardNumInput.value).toBe("4242424242424242") )
            // await waitFor(() =>  expect(cardNameInput.value).toBe("SARA RAMIREZ") )
            // await waitFor(() =>  expect(expirationDateInput.value).toBe("11/23") )
            // await waitFor(() =>  expect(cvvInput.value).toBe("123") )
   
        })
    })
})

// npm run test PaymentData.spec.tsx