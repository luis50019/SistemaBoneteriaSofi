import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleLoginScreen } from "./LoginScreen.style";
import InputIcon from "../../shared/components/form/inputIcon/InputIcon";
import CustomButton from "../../shared/components/buttons/customButton/CustomButton";
import { useLogin } from "../../auth/hooks/useLogin";

export default function LoginScreen() {
  const { onSubmit,handleSubmit,control } = useLogin();
  return (
    <View style={StyleLoginScreen.container}>
      <View style={StyleLoginScreen.header}>
        <View style={StyleLoginScreen.logoCircle}>
          <MaterialIcons name="storefront" size={36} color="#fff" />
        </View>
        <Text style={StyleLoginScreen.brand}>SOFI BONETERIA</Text>
      </View>
      <View style={StyleLoginScreen.card}>
        <View style={StyleLoginScreen.titleContainer}>
          <Text style={StyleLoginScreen.title}>¡Hola de nuevo!</Text>
          <Text style={StyleLoginScreen.subtitle}>
            Ingresa a tu cuenta para vender
          </Text>
        </View>
        <View style={StyleLoginScreen.field}>
          <Text style={StyleLoginScreen.label}>Correo</Text>
          <InputIcon controller={control} name='email' nameIcon="person" placeholder="ejemplo@gmail.com" keyBoardType="default" secure={false}/>
        </View>
        <View style={StyleLoginScreen.field}>
          <Text style={StyleLoginScreen.label}>Contraseña</Text>
          <InputIcon controller={control} name="password" nameIcon="lock" placeholder="tu contraseña" keyBoardType="default" secure={true}/>

          <TouchableOpacity>
            <Text style={StyleLoginScreen.forgot}>¿Olvidaste tu PIN?</Text>
          </TouchableOpacity>
        </View>
        <CustomButton title="ENTRAR" handleClick={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}