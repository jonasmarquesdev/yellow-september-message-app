import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Img() {
  return (
    <>
      <View>
        <Image style={styles.Img} source={require("../../assets/img.jpg")} />
        <Text style={styles.Text}>A vida é a melhor escolha</Text>
      </View>
    </>
  );
}
