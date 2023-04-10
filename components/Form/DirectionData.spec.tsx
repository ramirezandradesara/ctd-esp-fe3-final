import { act, render, screen, waitFor } from "@testing-library/react";
import { DirectionData } from "./DirectionData";
import userEvent from "@testing-library/user-event";
import { Wrapper } from "dh-marvel/test/Wrapper";

describe('DirectionData.spec.tsx', () => {
    describe('when rendering default', () => {
        it('should render direction inputs', () => {
            render(
                <Wrapper>
                    <DirectionData
                        handleNext={() => { }}
                        activeStep={1}
                        handleBack={() => { }}
                    />
                </Wrapper>
            )

            const directionInput = screen.getByRole('textbox', { name: /Dirección */i })
            const direction2Input = screen.getByRole('textbox', { name: "Dpto, piso, etc. (opcional)"})
            const cityInput = screen.getByRole('textbox', { name: /Ciudad */i })
            const provinceInput = screen.getByRole('textbox', { name: /Provincia */i })
            const zipCodeInput = screen.getByRole('textbox', { name: /Código postal */i })

            expect(directionInput).toBeInTheDocument();
            expect(direction2Input).toBeInTheDocument();
            expect(cityInput).toBeInTheDocument();
            expect(provinceInput).toBeInTheDocument();
            expect(zipCodeInput).toBeInTheDocument();
        })       
    })

    describe('when entering wrong values', () => {
        it("should render inputs error when doesn't fill form", async () => {
            render(
                <Wrapper>
                    <DirectionData
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

            await waitFor(() => expect(screen.getByText("El dirección es requerido")).toBeInTheDocument());
            await waitFor(() => expect(screen.getByText("El ciudad es requerido")).toBeInTheDocument());
            await waitFor(() => expect(screen.getByText("El provincia es requerido")).toBeInTheDocument());
            await waitFor(() => expect(screen.getByText('El código postal es requerido')).toBeInTheDocument());
        })
    })

    describe('when entering correct values', () => {
        it("should not render inputs error", async () => {
            render(
                <Wrapper>
                  <DirectionData
                        handleNext={() => { }}
                        activeStep={1}
                        handleBack={() => { }}
                    />
                </Wrapper>
            );

            const directionInput = screen.getByRole('textbox', { name: /Dirección */i })
            const direction2Input = screen.getByRole('textbox', { name: "Dpto, piso, etc. (opcional)"})
            const cityInput = screen.getByRole('textbox', { name: /Ciudad */i })
            const provinceInput = screen.getByRole('textbox', { name: /Provincia */i })
            const zipCodeInput = screen.getByRole('textbox', { name: /Código postal */i })
            const nextButton = screen.getByText(/siguiente/i);


            act(() => {
                userEvent.type(directionInput, "calle falsa 123")
                userEvent.type(direction2Input, "piso B")
                userEvent.type(cityInput, "caba")
                userEvent.type(provinceInput, "caba")
                userEvent.type(zipCodeInput, "1233")
                userEvent.click(nextButton);
            })

            await waitFor(() => expect(screen.queryByText("El número de la tarjeta es requerido")).not.toBeInTheDocument());
            await waitFor(() => expect(screen.queryByText("El nombre de la tarjeta es requerido")).not.toBeInTheDocument());
            await waitFor(() => expect(screen.queryByText("La fecha de expiración es requerida")).not.toBeInTheDocument());
            await waitFor(() => expect(screen.queryByText("El código de seguridad es requerido")).not.toBeInTheDocument());
        })
    })
})

// npm run test DirectionData.spec.tsx