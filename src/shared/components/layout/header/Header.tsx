import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styleHeader } from "./Header.style";
import { COLORS } from "../../../../core/const/color";

function Header() {
  return (<View style={styleHeader.header}>
    <View style={styleHeader.storeIcon}>
      <MaterialIcons name="storefront" size={22} color={COLORS.PRIMARY} />
    </View>

    <View style={{ flex: 1, marginLeft: 12 }}>
      <Text style={styleHeader.subtitle}>Bonetería</Text>
      <Text style={styleHeader.title}>Sofi</Text>
    </View>

    <View style={styleHeader.avatar}>
      <MaterialIcons name="account-circle" size={26} color="#64748B" />
    </View>
  </View>);
}

export default Header;