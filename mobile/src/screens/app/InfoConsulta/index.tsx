import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Alert, FlatList } from "react-native";

import theme from "../../../utils/theme";

import { useAuth } from "../../../contexts/useAuth";

import { styles } from "./styles";
import Header from "../../../components/Header";
import TextApp from "../../../components/Text";

import { getConsulta } from "../../../services/api/app/minhasFichas/consulta";
import { ConsultasTypes } from "../../../@types/signIn.interface";
import CardConsultas from "../../../components/CardConsultas";

export default function InfoConsulta() {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [personalData, setPersonalData] = useState<ConsultasTypes[]>(
    [] as ConsultasTypes[]
  );

  const { userDataLogin } = useAuth();
  const token: string = userDataLogin.token;
  const id_paciente: string = userDataLogin.user.id;

  const fetchData = async () => {
    try {
      const { data, status } = await getConsulta(token, id_paciente);

      if (status === 200 || status === 201) {
        setPersonalData(data);
        setIsLoad(true);
      } else {
        setIsLoad(false);
        Alert.alert("Erro!", "Dados não carregados...");
      }
    } catch (error) {
      throw new Error("Ocorreu um erro durante o processamento.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function renderHorizontal(item: ConsultasTypes) {
    return <CardConsultas item={item} />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <View style={styles.container}>
        <Header title="Minhas fichas | Consultas" />

        <View>
          {personalData.length === 0 ? (
            <View
              style={{ justifyContent: "center", alignItems: "center" }}
            ></View>
          ) : (
            isLoad && (
              <FlatList
                horizontal
                snapToAlignment="start"
                scrollEventThrottle={16}
                decelerationRate="fast"
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, i) => `${item}${i}`}
                data={personalData}
                renderItem={({ item }) => renderHorizontal(item)}
                style={{ width: "100%" }}
                ListFooterComponent={<View style={{ height: 200 }} />}
              />
            )
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
