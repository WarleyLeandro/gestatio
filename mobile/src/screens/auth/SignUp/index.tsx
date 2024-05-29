import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  Alert,
} from "react-native";
import { UserRegister } from "../../../@types/signOff.interface";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useInitialNavigation } from "../../../hooks/navigation";

import { styles } from "./styles";
import TextApp from "../../../components/Text";
import theme from "../../../utils/theme";
import { createUser } from "../../../services/api/auth/signUp";

//TODO: validar os campos vazios da aplicação

export default function SignUp() {
  const navigation = useInitialNavigation();

  const [userRegister, setUserRegister] = useState<UserRegister>(
    {} as UserRegister
  );
  const [isError, setIsError] = useState<boolean>(false);

  const onSubmit = async () => {
    handleRegister(userRegister);
  };

  const handleRegister = async (values: UserRegister) => {
    try {
      let response = await createUser(values);

      if (response.status === 200 || 201) {
        //TODO: pega nome do user e seta no context
        //setUser(data);
        Alert.alert("Bem vinda", "Cadastro Realizado com sucesso!");
        navigation.navigate("SignIn");
      } else {
        setIsError(true);
        alert("Erro durante processo de registro, tente novamente!");
      }
    } catch (erro) {
      setIsError(true);

      alert("Erro ao cadastrar. Tente novamente em segundos...");
      throw new Error("Ocorreu um erro durante o processamento.");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Registrar</Text>
        </View>
        <KeyboardAvoidingView style={{ paddingTop: 40 }}>
          <Input
            text="Nome"
            keyboardType="default"
            value={userRegister.nome}
            onChangeText={(text) => {
              userRegister.nome = text;
              setUserRegister({ ...userRegister });
            }}
            placeholder={"Digite seu nome"}
            maxLength={40}
          />
          <Input
            text="E-mail"
            keyboardType="email-address"
            value={userRegister.email}
            onChangeText={(text) => {
              userRegister.email = text;
              setUserRegister({ ...userRegister });
            }}
            placeholder={"Digite seu e-mail"}
            maxLength={30}
          />
          <Input
            text="CPF"
            keyboardType="decimal-pad"
            onChangeText={(text) => {
              userRegister.cpf = text;
              setUserRegister({ ...userRegister });
            }}
            value={userRegister.cpf}
            placeholder={"Digite seu CPF"}
            maxLength={11}
          />
          <Input
            text="Senha"
            onChangeText={(text) => {
              userRegister.password = text;
              setUserRegister({ ...userRegister });
            }}
            value={userRegister.password}
            placeholder={"Crie sua senha"}
            password={true}
            maxLength={8}
          />
          {/* <Input
            text="Confirme sua senha"
            onChangeText={(text) => {
              userRegister.confirmpassword = text;
              setUserRegister({ ...userRegister });
            }}
            value={userRegister.confirmpassword}
            placeholder={"Digite a senha"}
            password={true}
          /> */}
          <Button onPress={() => onSubmit()} title="Registrar" />
        </KeyboardAvoidingView>
        <View style={{ paddingTop: 24, flexDirection: "row" }}>
          <TextApp text="Volte ao" size={16} color={theme.colors.text} />
          <View style={{ paddingHorizontal: 8 }}>
            <TextApp
              text="Login"
              size={16}
              color={theme.colors.primary}
              onPress={() => navigation.navigate("SignIn")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
