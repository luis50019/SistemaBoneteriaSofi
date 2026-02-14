import { Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styleNavBar } from "./NavBar.style";
import { COLORS } from "../../../../core/const/color";
import { useNavigate } from "../../../hooks/useNavigate";
import type { RootStackParamList } from "../../../../app/navigations/types";

function NavBar() {
  const { navigationTo } = useNavigate();

  const items: {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    active: boolean;
    toPath: keyof RootStackParamList;
  }[] = [
    { icon: "grid-view", label: "Panel", active: true, toPath: "Home" },
    { icon: "receipt-long", label: "Ventas", active: false, toPath: "Sales" },
    { icon: "inventory", label: "Stock", active: false, toPath: "Inventary" },
  ];

  return (
    <View style={styleNavBar.tabBar}>
      {items.map((item, i) => (
        <Pressable onPress={() => navigationTo(item.toPath)} key={i}>
          <View style={styleNavBar.tabItem}>
            <MaterialIcons
              name={item.icon}
              size={22}
              color={item.active ? COLORS.PRIMARY : "#94A3B8"}
            />
            <Text
              style={[
                styleNavBar.tabText,
                item.active && { color: COLORS.PRIMARY },
              ]}
            >
              {item.label}
            </Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

export default NavBar;
