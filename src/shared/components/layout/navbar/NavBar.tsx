import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styleNavBar } from "./NavBar.style";
import { COLORS } from "../../../../core/const/color";
function NavBar() {
  return (  <View style={styleNavBar.tabBar}>
          {[
            { icon: "grid-view", label: "Panel", active: true },
            { icon: "receipt-long", label: "Ventas" },
            { icon: "inventory", label: "Stock" },
            { icon: "settings", label: "Ajustes" },
          ].map((item, i) => (
            <View key={i} style={styleNavBar.tabItem}>
              <MaterialIcons
                name={item.icon as any}
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
          ))}
        </View> );
}

export default NavBar;