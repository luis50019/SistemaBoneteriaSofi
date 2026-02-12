import { Text, TextInput, View } from "react-native";
import { styleProductoBasincInfo } from "./ProductBasicInfo.style";

function ProductBasicInfo() {
  return (<>
    <Text style={styleProductoBasincInfo.label}>Nombre Corto</Text>
    <TextInput
      style={styleProductoBasincInfo.input}
      value="Calcetín deportivo negro"
    />
    <View style={styleProductoBasincInfo.row}>
      <View style={{ flex: 1 }}>
        <Text style={styleProductoBasincInfo.label}>SKU</Text>
        <TextInput
          style={styleProductoBasincInfo.input}
          value="CAL-NEG-001"
        />
      </View>
      <View style={[styleProductoBasincInfo.stockBox]}>
        <Text style={styleProductoBasincInfo.stockNumber}>120</Text>
        <Text style={styleProductoBasincInfo.stockText}>UNIDADES</Text>
      </View>
    </View> </>);
}

export default ProductBasicInfo;