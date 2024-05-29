import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Alert, FlatList } from "react-native";

import theme from "../../../utils/theme";

import { useAuth } from "../../../contexts/useAuth";

import { styles } from "./styles";
import Header from "../../../components/Header";

import { getExame } from "../../../services/api/app/minhasFichas/exame";
import { ExamesType } from "../../../@types/signIn.interface";
import CardExames from "../../../components/CardExames";
import TextApp from "../../../components/Text";

export default function InfoExame() {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [personalData, setPersonalData] = useState<ExamesType[]>(
    {} as ExamesType[]
  );
  const { userDataLogin } = useAuth();
  const token: string = userDataLogin.token;
  const id_paciente: string = userDataLogin.user.id;

  const fetchData = async () => {
    try {
      const { data, status } = await getExame(token, id_paciente);

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

  function renderHorizontal(item: ExamesType) {
    return <CardExames item={item} />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <View style={styles.container}>
        <Header title="Minhas fichas | Exames" />

        <View>
          {personalData.length === 0 ? (
            <View
              style={{
                height: "80%",

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextApp
                size={16}
                text="Não há exames no momento."
                color={theme.colors.gray_400}
              />
            </View>
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
