import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { Appbar, Text, Paragraph, Checkbox } from "react-native-paper";
import { useProfileNavigation } from "../../../hooks/navigation";

import { styles } from "./styles";

export default function TermsOfServiceScreen() {
  const [checked, setChecked] = useState(false);

  const navigate = useProfileNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigate.goBack()} />
        <Appbar.Content title="Termos de Serviço" />
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <Paragraph style={styles.paragraph}>
          Bem-vindo ao nosso aplicativo! Ao usar nosso aplicativo, você concorda
          com os seguintes termos de serviço.
        </Paragraph>

        {/* Adicione mais seções conforme necessário */}
        <Text style={styles.heading}>1. Uso do Serviço</Text>
        <Paragraph style={styles.paragraph}>
          Você concorda em usar o serviço de acordo com os termos e condições
          estabelecidos neste documento.
        </Paragraph>

        <Text style={styles.heading}>2. Conta do Usuário</Text>
        <Paragraph style={styles.paragraph}>
          Para acessar determinados recursos do aplicativo, você pode ser
          obrigado a criar uma conta de usuário. Você é responsável por manter a
          segurança de sua conta.
        </Paragraph>

        <Text style={styles.heading}>3. Aceitação dos Termos</Text>
        <Paragraph style={styles.paragraph}>
          Ao clicar na caixa abaixo, você confirma que leu, entendeu e concorda
          com os Termos de Serviço.
        </Paragraph>

        <Paragraph style={styles.paragraph}>
          Bem-vindo ao nosso aplicativo! Ao usar nosso aplicativo, você concorda
          com os seguintes termos de serviço.
        </Paragraph>

        {/* Adicione mais seções conforme necessário */}
        <Text style={styles.heading}>1. Uso do Serviço</Text>
        <Paragraph style={styles.paragraph}>
          Você concorda em usar o serviço de acordo com os termos e condições
          estabelecidos neste documento.
        </Paragraph>

        <Text style={styles.heading}>2. Conta do Usuário</Text>
        <Paragraph style={styles.paragraph}>
          Para acessar determinados recursos do aplicativo, você pode ser
          obrigado a criar uma conta de usuário. Você é responsável por manter a
          segurança de sua conta.
        </Paragraph>

        <Text style={styles.heading}>3. Aceitação dos Termos</Text>
        <Paragraph style={styles.paragraph}>
          Ao clicar na caixa abaixo, você confirma que leu, entendeu e concorda
          com os Termos de Serviço.
        </Paragraph>
        {/* <View style={styles.checkboxContainer}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => setChecked(!checked)}
          />
          <Text style={styles.checkboxLabel}>
            Eu concordo com os Termos de Serviço
          </Text>
        </View> */}
      </ScrollView>
    </View>
  );
}
