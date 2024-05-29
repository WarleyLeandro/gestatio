import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

import Header from "../../../components/Header";

import theme from "../../../utils/theme";

import {
  useTabAPPNavigation,
  useInfoNavigation,
} from "../../../hooks/navigation";
import { styles } from "./styles";
import TextApp from "../../../components/Text";
import { ItemListProps } from "../../../@types/app.list";
import Card from "../../../components/Card";
import Info from "../Info";

export default function Home() {
  const navigation = useInfoNavigation();

  function renderVertical(item: ItemListProps) {
    return <Card item={item} />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.boxText}>
          <TextApp
            size={theme.fonts.title}
            text="Mais informações"
            color={theme.colors.gray_400}
          />
        </View>
        <View style={styles.boxCard}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("InfoAntecedente")}
            >
              <Text style={styles.text}>Antecedentes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("InfoConsulta")}
            >
              <Text style={styles.text}>Consultas</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("InfoExame")}
            >
              <Text style={styles.text}>Exames</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("InfoPreNatal")}
            >
              <Text style={styles.text}>Meu Pré-natal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
