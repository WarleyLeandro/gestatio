import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

type ItemProps = {
  type?: "simple" | "compound";
  title?: string;
  secondTitle?: string;
  text?: string | number;
  secondText?: string | number;
};

export default function Item({
  type = "simple",
  title,
  text,
  secondTitle,
  secondText,
}: ItemProps) {
  return type === "simple" ? (
    <View style={styles.itemContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{text}</Text>
    </View>
  ) : (
    <View style={styles.itemContainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.itemDoubleContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.contentText}>{text}</Text>
        </View>
        <View style={styles.itemDoubleContainer}>
          <Text style={styles.titleText}>{secondTitle}</Text>
          <Text style={styles.contentText}>{secondText}</Text>
        </View>
      </View>
    </View>
  );
}
