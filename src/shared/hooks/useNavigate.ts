import { CommonActions, useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../app/navigations/types";

type AppNavigation = NativeStackNavigationProp<RootStackParamList>;

type RouteName = keyof RootStackParamList;

export const useNavigate = () => {
  const navigation = useNavigation<AppNavigation>();

  const navigationTo = (destination: RouteName) => {
    navigation.navigate(destination);
  };

  const navigationToPath = (destination: RouteName) => {
    navigation.push(destination);
  };

  const resetTo = (destination: RouteName) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: destination }],
      })
    );
  };

  return {
    navigationTo,
    navigationToPath,
    resetTo,
  };
};
