import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Alert } from "react-native";

import theme from "../../../utils/theme";

import { useAuth } from "../../../contexts/useAuth";
import { useHomeNavigation } from "../../../hooks/navigation";
import { styles } from "./styles";
import Header from "../../../components/Header";
import TextApp from "../../../components/Text";
import { PatientEmergencyTypes } from "../../../@types/signOff.interface";
import { getPersonalEmergency } from "../../../services/api/app/perfil/personalEmergency";
import formatPhoneNumber from "../../../utils/functions/celphoneMask";
import Item from "../../../components/Item";

export default function ProfileEmergency() {
  const navigation = useHomeNavigation();

  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [personalData, setPersonalData] = useState<PatientEmergencyTypes>(
    {} as PatientEmergencyTypes
  );
  const { userDataLogin } = useAuth();
  const token: string = userDataLogin.token;
  const id_paciente: string = userDataLogin.user.id;

  const fetchData = async () => {
    try {
      const { data, status } = await getPersonalEmergency(token, id_paciente);

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
        <Header title="Perfil | Dados de emergência" />

        {personalData && isLoad && (
          <View style={styles.menuProfile}>
            <Item
              title="Nome do contato"
              text={personalData.nomeEmerg.toUpperCase()}
            />
            <Item title="Parentesco" text={personalData.parentescoEmerg} />
            <Item
              title="Celular de emergência"
              text={formatPhoneNumber(personalData.celEmerg)}
            />
            <Item
              title="Telefone de emergência"
              text={formatPhoneNumber(personalData.telEmerg)}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
