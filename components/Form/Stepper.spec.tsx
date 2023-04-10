import { act, render, screen, waitFor } from "@testing-library/react";
import Stepper from "./Stepper";
import userEvent from "@testing-library/user-event";

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

    describe('when filling form wrongly', () => {
        it('should render next and previous form', async () => {
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

            // userEvent.type(await screen.findByRole('textbox', { name: /Dirección */i }), 'Sara');
            // userEvent.type(await screen.findByRole('textbox', { name: "Dpto, piso, etc. (opcional)" }), 'Sara')
            // userEvent.type(await screen.findByRole('textbox', { name: /Ciudad */i }), 'Sara');
            // userEvent.type(await screen.findByRole('textbox', { name: /Provincia */i }), 'Sara');
            // userEvent.type(await screen.findByRole('textbox', { name: /Código postal */i }), 'Sara');

         
            // userEvent.click(await screen.findByText(/siguiente/i));

            // await waitFor(() => expect(screen.findByText("Paso 3: Datos del pago")).toBeInTheDocument());
        })
    })
})

// npm run test Stepper.spec.tsx