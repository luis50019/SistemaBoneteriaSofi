import { useForm } from "react-hook-form";
import { LoginType } from "../types/resquest/Login"; 
import { useAuthStore } from "../store/store"; 
import { Alert } from "react-native";
import { signIn } from "../auth.service";

export const useLogin = () => {
  const { control, formState, handleSubmit } = useForm<LoginType>({});
  const { setSession} = useAuthStore();

  const onSubmit = async (data: LoginType) => {
    try {
      console.log(data);
      const response = await signIn(data.email, data.password);
      console.log(response);
      setSession(response.session, response.user);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Error al iniciar sesion");
    }
  }

  return { control, formState, handleSubmit, onSubmit, }
}