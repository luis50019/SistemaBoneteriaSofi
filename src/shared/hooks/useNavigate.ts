import { CommonActions, useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../app/navigations/types";

type AppNavigation = NativeStackNavigationProp<RootStackParamList>;

export const useNavigate = () => {
  const navigation = useNavigation<AppNavigation>();

  const navigationTo = <T extends keyof RootStackParamList>(
    destination: T,
    params?: RootStackParamList[T]
  ) => {
    navigation.navigate(destination, params);
  };

  const navigationToPath = <T extends keyof RootStackParamList>(
    destination: T,
    params?: RootStackParamList[T]
  ) => {
    navigation.push(destination, params);
  };

  // úsalo solo cuando quieras reset real (ej. logout/login)
  const resetTo = <T extends keyof RootStackParamList>(
    destination: T,
    params?: RootStackParamList[T]
  ) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: destination, params }],
      })
    );
  };

  return { navigationTo, navigationToPath, resetTo };
};
