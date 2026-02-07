import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "../../shared/components/layout/navbar/NavBar";
import { COLORS } from "../../core/const/color"; 
import Header from "../../shared/components/layout/header/Header";

function MainLayout({ children }: { children: React.ReactNode }) {

  return (
    <SafeAreaView style={{flex: 1,paddingHorizontal:20, height:'100%',padding:0, margin:0,backgroundColor:COLORS.BG_PRIMARY}}>
      <Header />
      {children}
      <NavBar />
    </SafeAreaView>
  );
}

export default MainLayout;
