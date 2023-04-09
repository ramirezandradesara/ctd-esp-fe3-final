import { act, render, screen, waitFor } from "@testing-library/react";
import Stepper from "./Stepper";
import userEvent from "@testing-library/user-event";

describe('Stepper.spec.tsx', () => {
    describe('when rendering default', () => {

        it('should render title steps', () => {
            render(
                <Stepper />
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
                <Stepper />
            )

            const backButton = screen.getByText(/anterior/i);
            const nextButton = screen.getByText(/siguiente/i);

            expect(backButton).toBeInTheDocument();
            expect(nextButton).toBeInTheDocument();
        })
    })

    describe('when filling form correctly', () => {

        it('should render next form and previous form', async () => {
            render(
                <Stepper />
            )

            const nameInput = screen.getByRole('textbox', { name: /Nombre */i })
            const lastNameInput = screen.getByRole('textbox', { name: /Apellido */i })
            const emailInput = screen.getByRole('textbox', { name: /Email */i })
            const nextButton = screen.getByText(/siguiente/i);
            const backButton = screen.getByText(/anterior/i);

            await userEvent.type(nameInput, "Sara")
            await userEvent.type(lastNameInput, "Ramírez")
            await userEvent.type(emailInput, "uwu@gmail.com")
            await userEvent.click(nextButton);

            await waitFor(() => expect(screen.getByText("Paso 2: Dirección de entrega")).toBeInTheDocument());

            await userEvent.click(backButton);

            await waitFor(() => expect(screen.getByText("Paso 1: Datos Personales")).toBeInTheDocument());

        })
    })
})

// npm run test Stepper.spec.tsx