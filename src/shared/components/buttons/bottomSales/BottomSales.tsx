import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styleBottomSales } from "./BottomSales.style";
import { useNavigate } from "../../../hooks/useNavigate";
import type { RootStackParamList } from "../../../../app/navigations/types";

type MaterialIconName = keyof typeof MaterialIcons.glyphMap;

interface BottomSalesProps {
  to: keyof RootStackParamList;
  nameIcon: MaterialIconName;
  iconButtom: MaterialIconName;
  title: string;
}

function BottomSales({ to, nameIcon, title, iconButtom }: BottomSalesProps) {
  const { navigationToPath } = useNavigate();

  return (
    <View style={styleBottomSales.bottomBar}>
      <TouchableOpacity style={styleBottomSales.printBtn}>
        <MaterialIcons name={nameIcon} size={26} color="#64748B" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigationToPath(to)}
        style={styleBottomSales.newSaleBtn}
      >
        <Text style={styleBottomSales.newSaleText}>{title}</Text>
        <MaterialIcons name={iconButtom} size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

export default BottomSales;
