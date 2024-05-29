import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Text, View, KeyboardAvoidingView, Alert } from "react-native";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useInitialNavigation } from "../../../hooks/navigation";

import { useAuth } from "../../../contexts/useAuth";

import { authUser } from "../../../services/api/auth/signIn";

import { styles } from "./styles";
import TextApp from "../../../components/Text";
import theme from "../../../utils/theme";

import { UserLogin } from "../../../@types/signOff.interface";
import { formatCPF } from "../../../utils/functions/formatCPF";

type FormValues = {
  cpf: string;
  password: string;
};

export default function SignIn() {
  const { setUserDataLogin, login } = useAuth();

  const navigation = useInitialNavigation();

  const [isError, setIsError] = useState<boolean>(false);

  const schema = Yup.object()
    .shape({
      cpf: Yup.string()
        .required("CPF é obrigatório")
        .matches(/^\d{11}$/, "CPF deve conter 11 dígitos"),
      password: Yup.string().required("Senha é obrigatória"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  const handleLogin = async (values: UserLogin) => {
    try {
      let response = await authUser(values);
      if (response.status === 200 || response.status === 201) {
        setUserDataLogin(response.data);

        //TODO: verificar se preencheu
        Alert.alert(
          "Sucesso!",
          "Login feito com sucesso. Já Preencheu sua ficha? ",
          [
            {
              text: "Preencher agora",
              onPress: () => navigation.navigate("PersonalData"),
              style: "cancel",
            },
            { text: "Sim! Ir para a Home", onPress: () => login() },
          ]
        );
      } else {
        setIsError(true);
        alert("Erro durante processo de login, tente novamente!");
      }
    } catch (erro) {
      setIsError(true);
      alert("Credenciais não encontradas!");
      throw new Error("Ocorreu um erro durante o processamento.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Entrar</Text>
        </View>

        <KeyboardAvoidingView style={{ paddingTop: 8 }}>
          {errors.cpf && (
            <TextApp
              text={errors.cpf?.message}
              size={12}
              color={theme.colors.red}
            />
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                text="CPF"
                keyboardType="decimal-pad"
                value={value}
                onChangeText={(text) => {
                  onChange(formatCPF(text));
                }}
                onBlur={onBlur}
                placeholder={"Digite seu CPF"}
                maxLength={14}
              />
            )}
            name="cpf"
            rules={{ required: "CPF é obrigatório" }}
          />

          {errors.password && (
            <TextApp
              text={errors.password?.message}
              size={12}
              color={theme.colors.red}
            />
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                text="Senha"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={"Digite sua senha"}
                password={true}
              />
            )}
            name="password"
            rules={{ required: "Senha é obrigatória" }}
          />

          <Button onPress={() => onSubmit()} title="Entrar" />
        </KeyboardAvoidingView>

        <View style={{ paddingTop: 24, flexDirection: "row" }}>
          <TextApp
            text="Não possui conta?"
            size={16}
            color={theme.colors.text}
          />
          <View style={{ paddingHorizontal: 8 }}>
            <TextApp
              text="Crie uma!"
              size={16}
              color={theme.colors.primary}
              onPress={() => navigation.navigate("SignUp")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
