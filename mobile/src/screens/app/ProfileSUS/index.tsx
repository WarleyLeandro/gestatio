import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Alert } from "react-native";

import theme from "../../../utils/theme";

import { useAuth } from "../../../contexts/useAuth";
import { useHomeNavigation } from "../../../hooks/navigation";
import { styles } from "./styles";
import Header from "../../../components/Header";

import { PatientSusTypes } from "../../../@types/signOff.interface";
import { getPersonalSUS } from "../../../services/api/app/perfil/personalSUS";
import Item from "../../../components/Item";

export default function ProfileSUS() {
  const navigation = useHomeNavigation();
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [personalData, setPersonalData] = useState<PatientSusTypes>(
    {} as PatientSusTypes
  );
  const { userDataLogin } = useAuth();
  const token: string = userDataLogin.token;
  const id_paciente: string = userDataLogin.user.id;

  const fetchData = async () => {
    try {
      const { data, status } = await getPersonalSUS(token, id_paciente);

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
        <Header title="Perfil | Dados SUS" />

        {personalData && isLoad && (
          <View style={styles.menuProfile}>
            <Item title="Número do SUS" text={personalData.susIdCartao || ""} />
            <Item
              title="Médico de referência"
              text={personalData.nomeDoutorRef || ""}
            />
            <Item title="Número do NIS" text={personalData.NISID || ""} />
            <Item
              title="Hospital do parto"
              text={personalData.hospitalNascCrianca || ""}
            />
            <Item
              title="Unidade médica"
              text={personalData.unidMedicaPreNatal || ""}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
