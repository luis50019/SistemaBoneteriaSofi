import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { styleCusttomButton } from "./CustomButton.style";

interface CustomButtonProps {
  title: string;
  backgroundColor?: string;
  handleClick?: () => void;
}

function CustomButton({ title, handleClick }: CustomButtonProps) {

  return (
    <Pressable onPress={handleClick}>
      <View style={styleCusttomButton.loginButton}>
        <Text allowFontScaling={false} style={styleCusttomButton.loginText}>{title}</Text>
        <MaterialIcons name="login" size={28} color="#fff" />
      </View>
    </Pressable>
  );
}

export default CustomButton;