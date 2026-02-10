import { Text, View } from "react-native";
import { styleFilterOption } from "./FilterOption.style";
import { COLORS } from "../../../../core/const/color";
export default function FilterOptions({ label, color, active, outline }: any) {
  return (
    <View
      style={[
        styleFilterOption.filter,
        active && { backgroundColor: color },
        outline && {
          backgroundColor: COLORS.SECONDARY,
          borderWidth: 2,
          borderColor: COLORS.PRIMARY + "33",
        },
      ]}
    >
      <Text
        style={[
          styleFilterOption.filterText,
          active && { color: "#fff" },
          outline && { color: COLORS.PRIMARY },
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

