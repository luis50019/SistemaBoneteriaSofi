import { Picker } from "@react-native-picker/picker";
import { Controller, useFormContext } from "react-hook-form";
import { styleProductPromotion } from "./ProductPromotion.style";
import { Text } from "react-native";
import { TypePromotions } from "../../../types/FormRegister/registerProducts";

const promotion: TypePromotions[] = [
  { name: "3 piezas por $25", quantity: 3, price: 25 },
  { name: "3 piezas por $50", quantity: 3, price: 25 },
];

export default function ProductPromotion() {
  const { control } = useFormContext();

  return (
    <>
      <Text style={styleProductPromotion.label}>Promoción</Text>

      <Controller
        name="promotion"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Picker selectedValue={value} onValueChange={onChange}>
            {promotion.map((promo) => (
              <Picker.Item label={promo.name} value={promo} />
            ))}
          </Picker>
        )}
      />
    </>
  );
}
