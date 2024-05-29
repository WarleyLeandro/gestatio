import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Text, Alert } from "react-native";

import theme from "../../../utils/theme";

import { useAuth } from "../../../contexts/useAuth";

import { styles } from "./styles";
import Header from "../../../components/Header";
import TextApp from "../../../components/Text";

import { getPreNatal } from "../../../services/api/app/minhasFichas/preNatal";
import {
  PreNatalTypes,
  NivelInstrucao,
} from "../../../@types/signIn.interface";
import Item from "../../../components/Item";
import { formatDate } from "../../../utils/functions/formatFormView";

export default function InfoPreNatal() {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [personalData, setPersonalData] = useState<PreNatalTypes>(
    {} as PreNatalTypes
  );
  const { userDataLogin } = useAuth();
  const token: string = userDataLogin.token;
  const id_paciente: string = userDataLogin.user.id;

  const fetchData = async () => {
    try {
      const { data, status } = await getPreNatal(token, id_paciente);

      if (status === 200 || status === 201) {
        setPersonalData(data[0]);

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
        <Header title="Minhas fichas | Pré-Natal" />

        {personalData && isLoad && (
          <View style={styles.menuProfile}>
            <TextApp
              size={18}
              text="Informações Gerais"
              color={theme.colors.primary_30}
              isBold
            />
            <Item
              type="compound"
              title="Nível de instrução"
              text={String(personalData.nivelInstrucao)}
              secondTitle="Estado civil"
              secondText={personalData.estadoCivil}
            />

            <TextApp
              size={18}
              text="Informações Antropométricas"
              color={theme.colors.primary_30}
              isBold
            />
            <Item
              type="compound"
              title="Peso anterior"
              text={`${personalData?.pesoAnterior} kg`}
              secondTitle="Altura"
              secondText={`${personalData?.altura} cm`}
            />
            <Item title="IMC" secondText={personalData.IMC} />
            <TextApp
              size={18}
              text="Informações Gestacionais"
              color={theme.colors.primary_30}
              isBold
            />

            <Item
              type="compound"
              title="Data da última menstruação (DUM)"
              text={formatDate(personalData.DUM)}
              secondTitle="Data provável do parto pela DUM (DPP)"
              secondText={formatDate(personalData.DPPD)}
            />
            <Item
              type="compound"
              title="Data provável do parto pela ecografia"
              text={formatDate(personalData.DPPE)}
              secondTitle="Tipo de gravidez"
              secondText={personalData.tipoGravidez}
            />

            <Item
              type="compound"
              title="Risco gestacional"
              text={personalData.riscoGestacional}
              secondTitle="Gravidez planejada"
              secondText={personalData.gravidezPlanejada ? "Sim" : "Não"}
            />

            <Item
              type="compound"
              title="Idade Gestacional hoje (IG)"
              text={personalData.IGH}
              secondTitle="Idade Gestacional em meses"
              secondText={personalData.IGM}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
