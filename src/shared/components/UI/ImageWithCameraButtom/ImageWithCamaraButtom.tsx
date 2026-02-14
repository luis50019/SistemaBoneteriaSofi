import { Image, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styleImageWithCamaraButtom } from "./ImageWithCamaraButtom.style";
import { useNavigate } from "../../../hooks/useNavigate";
function ImageWithCamaraButtom() {
  const { navigationToPath } = useNavigate();
  return (<View style={styleImageWithCamaraButtom.imageContainer}>
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuApE1Q3wx8AiTmo88PQGdUA6nGozBIk7qZcOJXzR_zZIMHto4Kaoqe4MTTsLLfo0T0iFuXkRwbzqMy7Qxo8_QKLPyQVKNUcb39nYJSiALDaadTKSiI1TTigwZjV8-oGv2rTlhJX8s_MBnB4Sd8zWmgx1ro8i_4ZPJJfNd1FIWJvi0PyvO09Pt72v8PYkNSN_NHQ6mJQYU7qXH3lPXwxMVacNvwe3vbYv2mHaB8363yGs6R6n20Ds02FsJn-O4ojIo49EZaZO3C9eUw",
            }}
            style={styleImageWithCamaraButtom.image}
          />

          <TouchableOpacity onPress={()=>{navigationToPath('Camara')}} style={styleImageWithCamaraButtom.cameraButton}>
            <MaterialIcons name="photo-camera" size={26} color="#FFF" />
          </TouchableOpacity>
        </View>);
}

export default ImageWithCamaraButtom;