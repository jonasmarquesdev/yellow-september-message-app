import { StatusBar } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

import { CardHeader } from "../components/CardHeader";
import { Phrase } from "../components/Phrase";
import { Img } from "../components/SecCardHeader";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CardHeader />
      <Image
        style={styles.Img}
        source={require("../assets/sa2.jpg")}
      />
      <Phrase
        title="O suicídio é uma das principais causas de mortalidade no Brasil e no mundo. No entanto, o conhecimento dos fatores de risco e sinais de alerta pode auxiliar na sua prevenção"
      />
      
    </View>
  );
}

// #ffd401
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffd401",
    alignItems: "center",
    justifyContent: "center",
  },
  Img: {
    width: 200,
    height: 200,
    borderRadius: 132,
    borderColor: '#fff',
    borderWidth: 3,
    marginTop: 16,
  }
});
