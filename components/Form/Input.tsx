import { TextField, TextFieldProps } from "@mui/material";
import { FC } from "react";
import { useController } from "react-hook-form";
import { Control } from "react-hook-form/dist/types";

export type Props = {
    control: Control;
    name: string;
    rules?: any;
} & TextFieldProps;

const Input: FC<Props> = ({ control, name, rules, ...props }) => {
    
    const { field } = useController({
        name,
        control,
        rules,
    });

    return (
        <TextField
            style={{ width: "100%", margin: "5px" }}
            {...field} {...props}
        />
    )
};

export default Input;