import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigate } from "../../../hooks/useNavigate";
import { styleFloatingBottom } from "./FloatingButtom.style";
import type { RootStackParamList } from "../../../../app/navigations/types";

interface PropsFlaotinButtom {
  to: keyof RootStackParamList;
}

function FloatingButtom({ to }: PropsFlaotinButtom) {
  const { navigationToPath } = useNavigate();
  return (
    <TouchableOpacity
      onPress={() => navigationToPath(to)}
      style={styleFloatingBottom.fab}
    >
      <Ionicons name="add" size={26} color="#fff" />
    </TouchableOpacity>
  );
}
export default FloatingButtom;
