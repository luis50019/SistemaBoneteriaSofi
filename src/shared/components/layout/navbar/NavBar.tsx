import { Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styleNavBar } from "./NavBar.style";
import { COLORS } from "../../../../core/const/color";
import { useNavigate } from "../../../hooks/useNavigate";
function NavBar() {
  const { navigationTo } = useNavigate();
  return (  <View style={styleNavBar.tabBar}>
          {[
            { icon: "grid-view", label: "Panel", active: true, toPath:'Home' },
            { icon: "receipt-long", label: "Ventas",active:false, toPath:'Sales' },
            { icon: "inventory", label: "Stock",active:false, toPath:'Inventary' },
            { icon: "settings", label: "Ajustes",active:false, toPath:'Settings' },
          ].map((item, i) => (
            <Pressable onPress={()=>navigationTo(item.toPath)} key={i} >
              <View style={styleNavBar.tabItem}>
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
            </Pressable>
          ))}
        </View> );
}

export default NavBar;