import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { PatientEmergencyTypes } from "../../../@types/signOff.interface";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { styles } from "./styles";
import { useAuth } from "../../../contexts/useAuth";
import { registerPatientEmergency } from "../../../services/api/auth/patientEmergency";

export default function PatientEmergency() {
  const [message, setMessage] = useState<string>("");
  const [userData, setUserData] = useState<PatientEmergencyTypes>(
    {} as PatientEmergencyTypes
  );
  const [isError, setIsError] = useState<boolean>(false);

  const { login, userDataLogin } = useAuth();
  const token: string = userDataLogin.token;
  const id_paciente: string = userDataLogin.user.id;

  const onSubmit = async () => {
    const { data, status } = await registerPatientEmergency(
      userData,
      id_paciente,
      token
    );

    if (status === 200 || status === 201) {
      Alert.alert("Sucesso!", "Contato de emergência salvo com sucesso.");
      login();
    } else {
      Alert.alert("Erro!", "Dados não cadastrados...");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Emergência</Text>
          <Text style={styles.subTitle}>
            Por favor, forneça os dados do seu contato de emergência abaixo.
          </Text>
        </View>
        <KeyboardAvoidingView>
          <Input
            text="Nome"
            keyboardType="default"
            value={userData.nomeEmerg}
            //TODO: se der tempo atualizar os inputs
            onChangeText={(text) => {
              setUserData((prevUserData) => ({
                ...prevUserData,
                nomeEmerg: text,
              }));
            }}
            placeholder={"Digite o nome do seu contato"}
            maxLength={11}
          />
          <Input
            text="Parentesco"
            keyboardType="default"
            value={userData.parentescoEmerg}
            onChangeText={(text) => {
              userData.parentescoEmerg = text;
              setUserData({ ...userData });
            }}
            placeholder={"Esposo, irmão, mãe..."}
            maxLength={11}
          />
          <Input
            text="Celular de emergência"
            keyboardType="phone-pad"
            value={userData.celEmerg}
            onChangeText={(text) => {
              userData.celEmerg = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu contato de emergência"}
            maxLength={11}
          />
          <Input
            text="Telefone de emergência"
            keyboardType="phone-pad"
            value={userData.telEmerg}
            onChangeText={(text) => {
              userData.telEmerg = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu contato de emergência"}
            maxLength={11}
          />

          <Button onPress={() => onSubmit()} title="Finalizar" />
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}
