import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PersonalDataTypes } from "../../../@types/signOff.interface";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { useAuth } from "../../../contexts/useAuth";
import { useInitialNavigation } from "../../../hooks/navigation";

import { styles } from "./styles";

import { registerPersonalData } from "../../../services/api/auth/personalData";
import TextApp from "../../../components/Text";
import theme from "../../../utils/theme";

export default function PersonalData() {
  const navigation = useInitialNavigation();
  const [userData, setUserData] = useState<PersonalDataTypes>(
    {} as PersonalDataTypes
  );

  const [checked, setChecked] = useState<Boolean>(false);

  const handleRadioButtonChange = (value: boolean) => {
    userData.trabalhaEmCasa = value;
    setChecked(value);
  };
  const { userDataLogin } = useAuth();

  const token: string = userDataLogin.token;
  const id_paciente: string = userDataLogin.user.id;

  const onSubmit = async () => {
    const { data, status } = await registerPersonalData(
      userData,
      token,
      id_paciente
    );

    if (status === 200 || status === 201) {
      Alert.alert("Sucesso!", "Cadastro feito com sucesso.");
      navigation.navigate("PatientSus");
    } else {
      Alert.alert("Erro!", "Dados não atualizados...");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Dados Pessoais</Text>
          <Text style={styles.subTitle}>
            {`Olá ${userDataLogin.user.nome}! Vamos começar preenchendo seus dados pessoais!`}
          </Text>
        </View>
        <KeyboardAvoidingView>
          <Input
            text="Conhecido como"
            keyboardType="default"
            value={userData.conhecidoComo}
            onChangeText={(text) => {
              userData.conhecidoComo = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu nome social ou apelido"}
            maxLength={40}
          />
          <Input
            text="Nome do companheiro"
            keyboardType="default"
            value={userData.nomeCompanheiro}
            onChangeText={(text) => {
              userData.nomeCompanheiro = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite o nome do seu companheiro"}
            maxLength={40}
          />
          <Input
            text="Data de nascimento"
            keyboardType="decimal-pad"
            value={userData.dataNascimento}
            onChangeText={(text) => {
              userData.dataNascimento = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite sua data de nascimento"}
            maxLength={10}
          />
          <Input
            text="Idade"
            keyboardType="decimal-pad"
            value={userData.idade}
            onChangeText={(text) => {
              userData.idade = text;
              setUserData({ ...userData, idade: Number(userData.idade) });
            }}
            placeholder={"Digite seu nome"}
            maxLength={2}
          />
          <Input
            text="Raça"
            keyboardType="default"
            value={userData.raca}
            onChangeText={(text) => {
              userData.raca = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu nome"}
            maxLength={11}
          />

          <View style={styles.containerButton}>
            <TextApp
              color={theme.colors.text}
              size={theme.fonts.text}
              text="Trabalha em casa?"
            />
            <TouchableOpacity
              style={[
                styles.radioButton,
                checked === true && styles.radioButtonSelected,
              ]}
              onPress={() => handleRadioButtonChange(true)}
            >
              <Text style={styles.radioButtonText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.radioButton,
                checked === false && styles.radioButtonSelected,
              ]}
              onPress={() => handleRadioButtonChange(false)}
            >
              <Text style={styles.radioButtonText}>Não</Text>
            </TouchableOpacity>
          </View>

          <Input
            text="Ocupação"
            keyboardType="default"
            value={userData.ocupacao}
            onChangeText={(text) => {
              userData.ocupacao = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu nome"}
            maxLength={30}
          />

          <Input
            text="Cep"
            keyboardType="decimal-pad"
            value={userData.cep}
            onChangeText={(text) => {
              userData.cep = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu cep"}
            maxLength={8}
          />
          <Input
            text="Endereço"
            keyboardType="default"
            value={userData.endereco}
            onChangeText={(text) => {
              userData.endereco = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu endereço"}
            maxLength={50}
          />
          <Input
            text="Cidade"
            keyboardType="default"
            value={userData.cidade}
            onChangeText={(text) => {
              userData.cidade = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite sua cidade"}
            maxLength={20}
          />
          <Input
            text="Estado UF"
            keyboardType="default"
            value={userData.estado}
            onChangeText={(text) => {
              userData.estado = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu estado UF"}
            maxLength={2}
          />
          <Input
            text="Telefone Fixo"
            keyboardType="phone-pad"
            value={userData.telefoneFixo}
            onChangeText={(text) => {
              userData.telefoneFixo = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu telefone fixo"}
            maxLength={14}
          />
          <Input
            text="Telefone Celular"
            keyboardType="phone-pad"
            value={userData.telefoneCelular}
            onChangeText={(text) => {
              userData.telefoneCelular = text;
              setUserData({ ...userData });
            }}
            placeholder={"Digite seu telefone celular"}
            maxLength={14}
          />

          <Button onPress={() => onSubmit()} title="Próximo" />
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}
