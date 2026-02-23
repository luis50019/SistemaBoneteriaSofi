import { Control, Controller } from "react-hook-form";
import { StyleProp, TextStyle, TextInput } from "react-native";
interface PropsInputCustom {
  styleInput: StyleProp<TextStyle>;
  control: Control<any>;
  name: string;
  rules?: object;
  placeholder: string;
  secure?: boolean;
  keyboardType: "default" | "numeric" | "decimal-pad";
}

export default function InputCustom({
  name,
  control,
  keyboardType,
  rules,
  styleInput,
  secure,
  placeholder,
}: PropsInputCustom) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secure}
          onBlur={onBlur}
          keyboardType={keyboardType}
          onChange={onChange}
          style={styleInput}
          value={value}
        />
      )}
    />
  );
}
