import { TextInput, View } from "react-native";
import { stylesInputIcon } from "./InputIcon.style";
import { MaterialIcons } from "@expo/vector-icons";
import { Control, Controller } from "react-hook-form";

interface PropsInputIcon {
  nameIcon: string;
  placeholder: string;
  keyBoardType: string;
  secure: boolean;
  controller: Control<any>;
  name: string;
  rules?:object
}

function InputIcon({ nameIcon, placeholder, keyBoardType, secure, controller,name,rules }: PropsInputIcon) {
  return (<Controller
    control={controller}
    name={name}
    rules={rules}
    render={({
      field: { onChange, onBlur, value },
      fieldState: { error },
    }) => (
      <View style={stylesInputIcon.inputGroup}>
        <View style={stylesInputIcon.iconBox}>
          <MaterialIcons name={nameIcon} size={24} color="#896175" />
        </View>
        <TextInput
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#b49aaa"
          secureTextEntry={secure}
          keyboardType="default"
          style={stylesInputIcon.input}
        />
      </View>
    )}
  />);
}

export default InputIcon;
