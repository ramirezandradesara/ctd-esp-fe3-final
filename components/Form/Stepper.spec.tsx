import { render, screen } from "@testing-library/react";
import Stepper from "./Stepper";

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
})