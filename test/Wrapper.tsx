import { useForm, FormProvider } from "react-hook-form";

export const Wrapper = ({ children }: any) => {
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
