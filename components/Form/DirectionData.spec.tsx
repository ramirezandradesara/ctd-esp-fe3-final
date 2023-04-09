import { act, render, screen, waitFor } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { DirectionData } from "./DirectionData";
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
})

// npm run test DirectionData.spec.tsx