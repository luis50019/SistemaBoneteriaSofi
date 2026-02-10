import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { COLORS } from "../../../../core/const/color";

export default function  BottomIcon({ icon, label, active }: any) {
  return (
    <View style={{ alignItems: "center" }}>
      <MaterialIcons
        name={icon}
        size={28}
        color={active ? COLORS.PRIMARY : "#94A3B8"}
      />
      <Text
        style={{
          fontSize: 10,
          fontWeight: "900",
          color: active ? COLORS.PRIMARY : "#94A3B8",
          marginTop: 2,
        }}
      >
        {label}
      </Text>
    </View>
  );
}