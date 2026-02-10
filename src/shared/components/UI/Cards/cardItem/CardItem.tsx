import { Image, Text, TouchableOpacity, View } from "react-native";
import { styleCardItem } from "./CardItem.style";
import { MaterialIcons } from "@expo/vector-icons";

export default function Item({
  name,
  image,
  badge,
  badgeColor,
  borderColor,
  subtitle,
  subtitleColor,
  disabled,
  action = "ENTRADA",
}: any) {
  return (
    <View
      style={[
        styleCardItem.item,
        borderColor && { borderColor },
        disabled && { opacity: 0.6, backgroundColor: "#F8FAFC" },
      ]}
    >
      <View style={styleCardItem.itemInfo}>
        <Image source={{ uri: image }} style={styleCardItem.image} />
        <View style={{ flex: 1 }}>
          <Text
            style={[
              styleCardItem.itemTitle,
              disabled && { textDecorationLine: "line-through" },
            ]}
            numberOfLines={1}
          >
            {name}
          </Text>

          {badge && (
            <View style={[styleCardItem.badge, { backgroundColor: badgeColor }]}>
              <Text style={styleCardItem.badgeText}>{badge}</Text>
            </View>
          )}

          {subtitle && (
            <Text
              style={[
                styleCardItem.subtitle,
                subtitleColor && { color: subtitleColor },
              ]}
            >
              {subtitle}
            </Text>
          )}
        </View>
      </View>

      <TouchableOpacity style={styleCardItem.actionBtn}>
        <MaterialIcons
          name={action === "SURTIR" ? "local-shipping" : "add-circle"}
          size={30}
          color="#fff"
        />
        <Text style={styleCardItem.actionText}>{action}</Text>
      </TouchableOpacity>
    </View>
  );
}