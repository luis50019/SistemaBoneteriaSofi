function Filter({ label, color, active, outline }: any) {
  return (
    <View
      style={[
        styles.filter,
        active && { backgroundColor: color },
        outline && {
          backgroundColor: SECONDARY,
          borderWidth: 2,
          borderColor: PRIMARY + "33",
        },
      ]}
    >
      <Text
        style={[
          styles.filterText,
          active && { color: "#fff" },
          outline && { color: PRIMARY },
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

function Item({
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
        styles.item,
        borderColor && { borderColor },
        disabled && { opacity: 0.6, backgroundColor: "#F8FAFC" },
      ]}
    >
      <View style={styles.itemInfo}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.itemTitle,
              disabled && { textDecorationLine: "line-through" },
            ]}
            numberOfLines={1}
          >
            {name}
          </Text>

          {badge && (
            <View style={[styles.badge, { backgroundColor: badgeColor }]}>
              <Text style={styles.badgeText}>{badge}</Text>
            </View>
          )}

          {subtitle && (
            <Text
              style={[
                styles.subtitle,
                subtitleColor && { color: subtitleColor },
              ]}
            >
              {subtitle}
            </Text>
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.actionBtn}>
        <MaterialIcons
          name={action === "SURTIR" ? "local-shipping" : "add-circle"}
          size={30}
          color="#fff"
        />
        <Text style={styles.actionText}>{action}</Text>
      </TouchableOpacity>
    </View>
  );
}

function BottomIcon({ icon, label, active }: any) {
  return (
    <View style={{ alignItems: "center" }}>
      <MaterialIcons
        name={icon}
        size={28}
        color={active ? PRIMARY : "#94A3B8"}
      />
      <Text
        style={{
          fontSize: 10,
          fontWeight: "900",
          color: active ? PRIMARY : "#94A3B8",
          marginTop: 2,
        }}
      >
        {label}
      </Text>
    </View>
  );
}
