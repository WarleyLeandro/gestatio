import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Alert } from "react-native";

import theme from "../../../utils/theme";

import { useAuth } from "../../../contexts/useAuth";

import { styles } from "./styles";
import Header from "../../../components/Header";

import { getAntecedente } from "../../../services/api/app/minhasFichas/antecedentes";
import { AntecedentesTypes, SNNI } from "../../../@types/signIn.interface";
import Item from "../../../components/Item";

export default function InfoAntecedente() {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [personalData, setPersonalData] = useState<AntecedentesTypes>(
    {} as AntecedentesTypes
  );
  const { userDataLogin } = useAuth();
  const token: string = userDataLogin.token;
  const id_paciente: string = userDataLogin.user.id;

  const fetchData = async () => {
    try {
      const { data, status } = await getAntecedente(token, id_paciente);

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
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <View style={styles.container}>
        <Header title="Minhas fichas | Antecedentes" />

        {isLoad && (
          <View style={styles.menuProfile}>
            <Item
              title="Diabetes"
              text={
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                SNNI[personalData.diabetes] || ""
              }
            />
            <Item
              title="Hipertensão"
              text={
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                SNNI[personalData.hipertensao] || ""
              }
            />
            <Item
              title="Gemelaridade"
              text={
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                SNNI[personalData.gemelaridade] || ""
              }
            />
            <Item
              title="Outros"
              text={
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                SNNI[personalData.outros] || ""
              }
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
