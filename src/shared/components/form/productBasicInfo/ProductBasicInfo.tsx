import { Text, TextInput, View } from "react-native";
import { styleProductoBasincInfo } from "./ProductBasicInfo.style";
import { useFormContext } from "react-hook-form";
import InputCustom from "../inputCustom/InputCustom";

function ProductBasicInfo() {
  const { control } = useFormContext();

  return (
    <>
      <Text style={styleProductoBasincInfo.label}>Nombre Corto</Text>
      <InputCustom
        control={control}
        styleInput={styleProductoBasincInfo.input}
        keyboardType="default"
        name="description"
        placeholder="Nombre del producto"
      />
      <View style={styleProductoBasincInfo.row}>
        <View style={{ flex: 1 }}>
          <Text style={styleProductoBasincInfo.label}>SKU</Text>
          <Text style={styleProductoBasincInfo.input}>CAL-NEG-001</Text>
        </View>
        <View style={[styleProductoBasincInfo.stockBox]}>
          <InputCustom
            control={control}
            styleInput={styleProductoBasincInfo.stockNumber}
            keyboardType="numeric"
            name="quantity"
            placeholder="120"
          />
          <Text style={styleProductoBasincInfo.stockText}>UNIDADES</Text>
        </View>
      </View>
    </>
  );
}

export default ProductBasicInfo;

