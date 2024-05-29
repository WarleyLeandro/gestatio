import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { PatientSusTypes } from "../../../@types/signOff.interface";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { useInitialNavigation } from "../../../hooks/navigation";
import { useAuth } from "../../../contexts/useAuth";

import { styles } from "./styles";
import { registerPatientSus } from "../../../services/api/auth/patientSus";

export default function PatientSus() {
  const navigation = useInitialNavigation();
  const { userDataLogin } = useAuth();

  const [message, setMessage] = useState<string>("");
  const [userData, setUserData] = useState<PatientSusTypes>(
    {} as PatientSusTypes
  );
  const [isError, setIsError] = useState<boolean>(false);

  const token: string = userDataLogin.token;
  const id_paciente: string = userDataLogin.user.id;

  const onSubmit = async () => {
    const { data, status } = await registerPatientSus(
      userData,
      id_paciente,
      token
    );

    if (status === 200 || status === 201) {
      Alert.alert("Sucesso!", "Cadastro SUS feito com sucesso.");
      navigation.navigate("PatientEmergency");
    } else {
      Alert.alert("Erro!", "Dados não cadastrados...");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Dados do SUS</Text>
          <Text style={styles.subTitle}>
            {`${userDataLogin.user.nome}`}, informe seus dados do SUS
          </Text>
        </View>
        <KeyboardAvoidingView>
          <Input
            text="Cartão do SUS"
            keyboardType="decimal-pad"
            value={userData.susIdCartao}
            onChangeText={(text) => {
              userData.susIdCartao = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu cartão do SUS"}
            maxLength={15}
          />
          <Input
            text="Profissional de saúde de referência"
            keyboardType="default"
            value={userData.nomeDoutorRef}
            onChangeText={(text) => {
              userData.nomeDoutorRef = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite o nome"}
            maxLength={11}
          />
          <Input
            text="NIS"
            keyboardType="default"
            value={userData.NISID}
            onChangeText={(text) => {
              userData.NISID = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite o número do NIS"}
            maxLength={11}
          />
          <Input
            text="Serviço de saúde indicado para o parto"
            keyboardType="default"
            value={userData.hospitalNascCrianca}
            onChangeText={(text) => {
              userData.hospitalNascCrianca = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite o nome da unidade"}
            maxLength={11}
          />
          <Input
            text="Unidade de saúde do pré-natal"
            keyboardType="decimal-pad"
            value={userData.unidMedicaPreNatal}
            onChangeText={(text) => {
              userData.unidMedicaPreNatal = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu unidade"}
            maxLength={20}
          />

          <Button onPress={() => onSubmit()} title="Próximo" />
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}
