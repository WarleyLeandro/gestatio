import React from "react";
import { View, SafeAreaView } from "react-native";

import theme from "../../../utils/theme";

import { styles } from "./styles";
import Header from "../../../components/Header";

export default function ProfileSupport() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <View style={styles.container}>
        <Header title="Suporte" />
      </View>
    </SafeAreaView>
  );
}
