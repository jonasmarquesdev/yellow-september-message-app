import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';

export function CardHeader() {
  return (
    <>
      <View style={styles.titles}>
        <Text style={styles.subTitle}>setembro</Text>
        <Text style={styles.primaryTitle}>amare o</Text>
        <Image style={styles.logo} source={require("../../assets/img2.png")} />
        <Text style={styles.footerTitle}>Mês de Prevenção ao Suicídio</Text>
      </View>
    </>
  );
}