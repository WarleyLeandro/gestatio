import React from "react";
import { View, SafeAreaView } from "react-native";

import theme from "../../../utils/theme";

import { style } from "./styles";

import Header from "../../../components/Header";

export default function Calendar() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <View style={style.container}>
        <Header title="Calendário" />

        <View style={{ width: "100%" }}></View>
      </View>
    </SafeAreaView>
  );
}
