import { act, render, screen, waitFor } from "@testing-library/react";
import Stepper from "./Stepper";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";

jest.mock('next/router', () => ({
    useRouter: jest.fn()
}))

const pushMock = jest.fn()

describe('Stepper.spec.tsx', () => {
    describe('when rendering default', () => {

        it('should render title steps', () => {
            render(
                <Stepper title={""} image={""} price={0} />
            )

            const step1 = screen.getByText("Datos Personales");
            const step2 = screen.getByText("Dirección de entrega");
            const step3 = screen.getByText("Datos del pago");

            expect(step1).toBeInTheDocument();
            expect(step2).toBeInTheDocument();
            expect(step3).toBeInTheDocument();
        })

        it('should render back and next buttons', () => {
            render(
                <Stepper title={""} image={""} price={0} />
            )

            const backButton = screen.getByText(/anterior/i);
            const nextButton = screen.getByText(/siguiente/i);

            expect(backButton).toBeInTheDocument();
            expect(nextButton).toBeInTheDocument();
        })
    })

    describe('when filling form', () => {
        it('should navigate to next and previous form', async () => {
            render(
                <Stepper title={""} image={""} price={0} />
            )

            const nameInput = screen.getByRole('textbox', { name: /Nombre */i })
            const lastNameInput = screen.getByRole('textbox', { name: /Apellido */i })
            const emailInput = screen.getByRole('textbox', { name: /Email */i })
            const nextButton = screen.getByText(/siguiente/i);
            const backButton = screen.getByText(/anterior/i);

            expect(backButton).toHaveAttribute("disabled")

            await userEvent.type(nameInput, "Sara")
            await userEvent.type(lastNameInput, "Ramírez")
            await userEvent.type(emailInput, "uwu@gmail.com")
            await userEvent.click(nextButton);

            await waitFor(() => expect(screen.getByText("Paso 2: Dirección de entrega")).toBeInTheDocument());

            userEvent.click(await screen.findByText(/anterior/i));

            await waitFor(() => expect(screen.getByText("Paso 1: Datos Personales")).toBeInTheDocument());

            userEvent.click(await screen.findByText(/siguiente/i));

            await waitFor(() => expect(screen.getByText("Paso 2: Dirección de entrega")).toBeInTheDocument());
        })

        it('should render navigate to /confirmacion-compra', async () => {
            render(
                <Stepper title={""} image={""} price={0} />
            )

            const useRouterMock = jest.spyOn(require('next/router'), 'useRouter')
            useRouterMock.mockImplementation(() => ({
                push: pushMock
            }))

            const nameInput = screen.getByRole('textbox', { name: /Nombre */i })
            const lastNameInput = screen.getByRole('textbox', { name: /Apellido */i })
            const emailInput = screen.getByRole('textbox', { name: /Email */i })
            const nextButton = screen.getByText(/siguiente/i);
            const backButton = screen.getByText(/anterior/i);

            expect(backButton).toHaveAttribute("disabled")

            // PASO 1
            await userEvent.type(nameInput, "Sara")
            await userEvent.type(lastNameInput, "Ramírez")
            await userEvent.type(emailInput, "uwu@gmail.com")
            await userEvent.click(nextButton);

            // PASO 2
            await waitFor(() => expect(screen.getByText("Paso 2: Dirección de entrega")).toBeInTheDocument());

            await userEvent.type(screen.getByRole('textbox', { name: /Dirección */i }), "calle 123")
            await userEvent.type(screen.getByRole('textbox', { name: "Dpto, piso, etc. (opcional)" }), 'B')
            await userEvent.type(screen.getByRole('textbox', { name: /Ciudad */i }), 'CABA');
            await userEvent.type(screen.getByRole('textbox', { name: /Provincia */i }), 'CABA');
            await userEvent.type(screen.getByRole('textbox', { name: /Código postal */i }), '1964');

            userEvent.click(await screen.findByText(/siguiente/i));

            // PASO 3
            await waitFor(() => expect(screen.getByText("Paso 3: Datos del pago")).toBeInTheDocument());

            await userEvent.type(screen.getByRole('textbox', { name: /Número de tarjeta */i }), "42424242 4242 4242")
            await userEvent.type(screen.getByRole('textbox', { name: /Nombre como aparece en la tarjeta/i }), "SARA RAM")
            await userEvent.type(screen.getByRole<HTMLInputElement>('textbox', { name: /Fecha de expiración */i }), "12/23")
            await userEvent.type(screen.getByLabelText(/Código de seguridad */i), "123")

            userEvent.click(screen.getByRole('button', { name: /finalizar compra/i }));

            // expect(pushMock).toBeCalledTimes(1)
        })

        it('should render credit card error', async () => {
            render(
                <Stepper title={""} image={""} price={0} />
            )

            const nameInput = screen.getByRole('textbox', { name: /Nombre */i })
            const lastNameInput = screen.getByRole('textbox', { name: /Apellido */i })
            const emailInput = screen.getByRole('textbox', { name: /Email */i })
            const nextButton = screen.getByText(/siguiente/i);
            const backButton = screen.getByText(/anterior/i);

            expect(backButton).toHaveAttribute("disabled")

            // PASO 1
            await userEvent.type(nameInput, "Sara")
            await userEvent.type(lastNameInput, "Ramírez")
            await userEvent.type(emailInput, "uwu@gmail.com")
            await userEvent.click(nextButton);

            // PASO 2
            await waitFor(() => expect(screen.getByText("Paso 2: Dirección de entrega")).toBeInTheDocument());

            await userEvent.type(screen.getByRole('textbox', { name: /Dirección */i }), "Calle 123")
            await userEvent.type(screen.getByRole('textbox', { name: "Dpto, piso, etc. (opcional)" }), 'Piso B')
            await userEvent.type(screen.getByRole('textbox', { name: /Ciudad */i }), 'CABA');
            await userEvent.type(screen.getByRole('textbox', { name: /Provincia */i }), 'CABA');
            await userEvent.type(screen.getByRole('textbox', { name: /Código postal */i }), '1176');

            userEvent.click(await screen.findByText(/siguiente/i));

            // PASO 3
            await waitFor(() => expect(screen.getByText("Paso 3: Datos del pago")).toBeInTheDocument());

            await userEvent.type(screen.getByRole('textbox', { name: /Número de tarjeta */i }), "4141414141")
            await userEvent.type(screen.getByRole('textbox', { name: /Nombre como aparece en la tarjeta/i }), "SARA RAMIREZ")
            await userEvent.type(screen.getByRole('textbox', { name: /Fecha de expiración */i }), "12/74")
            await userEvent.type(screen.getByLabelText(/Código de seguridad */i), "123")

            userEvent.click(screen.getByRole('button', { name: /finalizar compra/i }));

            // ERROR
            await waitFor(async () => {
                screen.getByText("Something went wrong")
            })
        })
    })
})

// npm run test Stepper.spec.tsx