import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormPersonalData } from "dh-marvel/components/Form/FormPersonalData";
import { Wrapper } from "dh-marvel/test/Wrapper";

describe('FormPersonalData.spec.tsx', () => {
    describe('when rendering default', () => {
        it('should render personal name, lastname and email inputs', () => {
            render(
                <Wrapper>
                    <FormPersonalData
                        activeStep={0}
                        handleNext={() => { }}
                    />
                </Wrapper>
            )

            const nameInput = screen.getByRole('textbox', { name: /Nombre */i })
            const lastNameInput = screen.getByRole('textbox', { name: /Apellido */i })
            const emailInput = screen.getByRole('textbox', { name: /Email */i })

            expect(nameInput).toBeInTheDocument();
            expect(lastNameInput).toBeInTheDocument();
            expect(emailInput).toBeInTheDocument();
        })
    })

    describe('when entering wrong values', () => {
        it("should render inputs error when doesn't fill form", async () => {
            render(
                <Wrapper>
                    <FormPersonalData
                        activeStep={0}
                        handleNext={() => { }}
                    />
                </Wrapper>
            )

            const nextButton = screen.getByText(/siguiente/i);
            expect(nextButton).toBeInTheDocument();

            act(() => {
                userEvent.click(nextButton);
            })

            await waitFor(() => expect(screen.getByText("El nombre es requerido")).toBeInTheDocument());
            await waitFor(() => expect(screen.getByText("El apellido es requerido")).toBeInTheDocument());
            await waitFor(() => expect(screen.getByText("El email es requerido")).toBeInTheDocument());
        })
    })

    describe('when entering correct values', () => {
        it("should not render inputs error", async () => {
            render(
                <Wrapper>
                    <FormPersonalData
                        activeStep={0}
                        handleNext={() => { }}
                    />
                </Wrapper>
            );
            
            const nameInput = screen.getByRole('textbox', { name: /Nombre */i })
            const lastNameInput = screen.getByRole('textbox', { name: /Apellido */i })
            const emailInput = screen.getByRole('textbox', { name: /Email */i })
            const nextButton = screen.getByText(/siguiente/i);

            act(() => {
                userEvent.type(nameInput, "Sara")
                userEvent.type(lastNameInput, "Ramírez")
                userEvent.type(emailInput, "uwu@gmail.com")
                userEvent.click(nextButton);
            })

            await waitFor(() => expect(screen.queryByText("El nombre es requerido")).not.toBeInTheDocument());
            await waitFor(() => expect(screen.queryByText("El apellido es requerido")).not.toBeInTheDocument());
            await waitFor(() => expect(screen.queryByText("El nombre es requerido")).not.toBeInTheDocument());
        })
    })
})

// npm run test FormPersonalData.spec.tsx