import { Text, View, ViewProps, StyleSheet } from "react-native";

import { styles } from "./styles";

interface Props extends ViewProps {
  title: string;
}

export function Phrase({ title }: Props) {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  );
}

// #ffd401