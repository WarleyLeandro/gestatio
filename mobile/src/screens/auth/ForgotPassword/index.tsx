import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Text, View } from "react-native";
import { UserLogin } from "../../../@types/signOff.interface";
import Button from "../../../components/Button";

import Input from "../../../components/Input";
import { useInitialNavigation } from "../../../hooks/navigation";
//import { recoverPassword } from "../../../services/api/auth/login";
import theme from "../../../utils/theme";

import { styles } from "./styles";

export default function ForgotPassword() {
  const navigation = useInitialNavigation();

  const [message, setMessage] = useState<string>("");
  const [userLogin, setUserLogin] = useState<UserLogin>({} as UserLogin);
  const [isError, setIsError] = useState<boolean>(false);

  // const onSubmit = async () => {
  //   if (userLogin.cpf && userLogin.password) {
  //     const { data, status } = await recoverPassword(userLogin);

  //     if (status === 200 || status === 201) {
  //       Alert.alert(
  //         "Sucesso!",
  //         "Senha alterada. Confirme para efetuar seu login."
  //       );
  //       navigation.navigate("SignIn");
  //     } else {
  //       Alert.alert("Erro!", "Sua senha não foi recuperada...");
  //     }
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Recuperar senha</Text>
        </View>
        <KeyboardAvoidingView>
          <Input
            text="CPF"
            keyboardType="decimal-pad"
            value={userLogin.cpf}
            onChangeText={(text) => {
              userLogin.cpf = text;
              setUserLogin({ ...userLogin });
            }}
            placeholder={"Digite seu cpf"}
            maxLength={11}
          />
          <Input
            text="Nova senha"
            value={userLogin.password}
            onChangeText={(text) => {
              userLogin.password = text;
              setUserLogin({ ...userLogin });
            }}
            placeholder={"Digite sua nova senha"}
            password={true}
          />

          <Button
            onPress={() => navigation.navigate("PersonalData")}
            title="Recuperar"
          />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
