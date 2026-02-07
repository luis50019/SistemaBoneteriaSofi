import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { stylesInventaryScreen } from "./InventoryScreen.style";
import { Ionicons } from "@expo/vector-icons";
import { useNavigate } from "../../shared/hooks/useNavigate";

const PRIMARY = "#E91E63";
const DANGER = "#D32F2F";
const WARNING = "#F57C00";
const SUCCESS = "#2E7D32";
const SECONDARY = "#FCE4EC";

export default function InventoryScreen() {

  const { navigationToPath } = useNavigate();

  return (
    <View style={stylesInventaryScreen.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={stylesInventaryScreen.filters}
      >
        <Filter active label="Todo" color={PRIMARY} />
        <Filter label="Bajo Stock" color={DANGER} />
        <Filter outline label="Calcetín" />
        <Filter outline label="Interior" />
      </ScrollView>

      {/* LIST */}
      <ScrollView showsVerticalScrollIndicator={false}
        bounces={false}
        overScrollMode="never" 
        contentContainerStyle={stylesInventaryScreen.list}>
        <Item
          name="Escolar Blanco"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuBDNO0ET0yAzMaXHb_GddmEFaLzhg7YX73crWbCzI0HjCD9UTrMJd9lsKI-KQLje-580zNGnODe6K49Mtf1Y5l2XmymZ2uDEzYVt4f6Ta1RVIoJWumBqIYydaUb7R8UZV3_J2WVc1GM4a9B-76zAPqohEZtfNXGp5TN1q6ZZES4b7ER7aHc1Iq_1D9PVwMs8Pus1c70TqQoi6lBW0GIkmdTUuqEjWivYDD_P1DefA9-jPRRfOuMDWU6CMj1QhoP2LGsqNtsbMWN_fM"
          badge="SOLO 5"
          badgeColor={DANGER}
          borderColor={DANGER}
        />

        <Item
          name="Bóxer L Caballero"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuAoy7Vy6i8C_YQT5E4rLa5KZswgtwQuLJ5m4MjNGz0aTrQiunghz-kInQylIV6wSINX1vU-8VL-wqznwubkM8kR57QrfVCPDKylfJupmEjchDjFduGKXVRZYnkGfBtiwUO4ewcpmjGuesZVOvLGYyScKPLN2e0_w4GcDFiHhsMaUe2YDZ7T5lRJM_o7MJfaCT88zbxfpdOUy6THScvUr2ZzfQW_zcMbdnwX_Y--TWGvfRBI-IwvdQQFLsXWXidsaLWXafvxAOXbEu8"
          subtitle="42 unidades"
        />

        <Item
          name="Malla Rosa T4"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuA2ALOYGLXBPCeb_rdMGCIVYbLhTWpeHXPXM0ULEOUuNW8Rde5f3zKb20Uk9UGYdHl45ZKSDtI1Q3bXqXZUeDwHeJGz4fF4MGSUzraEFd9kJALBynDT7B8FoCXh9Eqb0uKsFy_zgK0RKzAvRU52kyF6ofMZEEXy-eKrrjSrUaLiZrBIWoJYg9v_OtpJAixFsSCdAVdQ2b_wNIsxvRz1eAvALYtTJut5HYNB_KEe2OwV-LXHm8DD0d3x8KglXiiENJbFpH0_ZcnOB5o"
          badge="QUEDAN 12"
          badgeColor={WARNING}
          borderColor={WARNING}
        />

        <Item
          name="Gorro Lana"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuAh7Fq0Ko1yMX1qQ6k0sxcT8X7a_ZuJ8zDOAOsWzn9N_zAD93tKG2XrE1S8qxeR8z69dacliS5-E_BrZwMLa_gbmjHRKKrqWUsZ1Qst6FuKJPBQPDnmLwxnaj05NRtAnY5IllhRWi57gPvTQKB-ziTS9FLaIjusx2zVYQBryWEYhoXecFJsKdm7BciqyEkrFEPGfMS98P1PIYpKPN3IuGGLh7RkNmo_V-HkdQYNJiX9hdLs12Ylj7v8P6PevPdQ8OFRWuKrhpRQWlQ"
          badge="AGOTADO"
          badgeColor="#111"
          disabled
          action="SURTIR"
        />

        <Item
          name="Tobillera G"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuDf-bMU22Jk122eJF1o3Nm9lSVmCVKgwlk-KgQ12whdfamW5Ls_lwjSDXKCkRIbUSn-hzL8w2iVj9nYGJMVwMXipps7S40dFwCC0G8pueq47TsI6UpV41qsjzSJJqwTe6m2CkS2_1TO2hE9l-ISYcJZ8azCYZ9CDEd8Kzlh4pztZvGDqFTW4B87HuI9iemtqfr0NASjgXDKexNdJzSwMLej7Zg6qz7p4Yuvl0T6ncAM5zeUm50EolsCQyb1StPogNrJ21v0yo1SimQ"
          subtitle="156 unidades"
          subtitleColor={SUCCESS}
        />
      </ScrollView>
      <TouchableOpacity onPress={()=>navigationToPath("AddProduct")} style={stylesInventaryScreen.fab}>
        <Ionicons name="add" size={26} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

function Filter({ label, color, active, outline }: any) {
  return (
    <View
      style={[
        stylesInventaryScreen.filter,
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
          stylesInventaryScreen.filterText,
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
        stylesInventaryScreen.item,
        borderColor && { borderColor },
        disabled && { opacity: 0.6, backgroundColor: "#F8FAFC" },
      ]}
    >
      <View style={stylesInventaryScreen.itemInfo}>
        <Image source={{ uri: image }} style={stylesInventaryScreen.image} />
        <View style={{ flex: 1 }}>
          <Text
            style={[
              stylesInventaryScreen.itemTitle,
              disabled && { textDecorationLine: "line-through" },
            ]}
            numberOfLines={1}
          >
            {name}
          </Text>

          {badge && (
            <View style={[stylesInventaryScreen.badge, { backgroundColor: badgeColor }]}>
              <Text style={stylesInventaryScreen.badgeText}>{badge}</Text>
            </View>
          )}

          {subtitle && (
            <Text
              style={[
                stylesInventaryScreen.subtitle,
                subtitleColor && { color: subtitleColor },
              ]}
            >
              {subtitle}
            </Text>
          )}
        </View>
      </View>

      <TouchableOpacity style={stylesInventaryScreen.actionBtn}>
        <MaterialIcons
          name={action === "SURTIR" ? "local-shipping" : "add-circle"}
          size={30}
          color="#fff"
        />
        <Text style={stylesInventaryScreen.actionText}>{action}</Text>
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
