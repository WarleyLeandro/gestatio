import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Text, Alert, ScrollView } from "react-native";

import theme from "../../../utils/theme";

import { useAuth } from "../../../contexts/useAuth";

import { styles } from "./styles";
import Header from "../../../components/Header";
import Item from "../../../components/Item";

import formatPhoneNumber from "../../../utils/functions/celphoneMask";
import { PersonalDataTypes } from "../../../@types/signOff.interface";
import { getPersonalData } from "../../../services/api/app/perfil/personalData";
import {
  formatDate,
  formatZIPCode,
} from "../../../utils/functions/formatFormView";

export default function ProfilePersonal() {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [personalData, setPersonalData] = useState<PersonalDataTypes>(
    {} as PersonalDataTypes
  );
  const { userDataLogin } = useAuth();
  const token: string = userDataLogin.token;
  const id_paciente: string = userDataLogin.user.id;

  const fetchData = async () => {
    try {
      const { data, status } = await getPersonalData(token, id_paciente);

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
        <Header title="Perfil | Dados pessoais" />

        <ScrollView>
          {personalData && isLoad && (
            <View style={styles.menuProfile}>
              <Item
                title="Conhecido como"
                text={personalData.conhecidoComo.toUpperCase()}
              />
              <Item
                title="Nome do companheiro"
                text={personalData.nomeCompanheiro.toUpperCase()}
              />

              <Item title="Ocupação" text={personalData.ocupacao} />

              <Item
                type="compound"
                title="Idade"
                text={personalData.idade}
                secondTitle="Data de nascimento"
                secondText={personalData.dataNascimento}
              />

              <Item
                type="compound"
                title="Raça"
                text={personalData.raca}
                secondTitle="Trabalha em casa"
                secondText={personalData.trabalhaEmCasa ? "Sim" : "Não"}
              />

              <Item
                type="compound"
                title="Estado"
                text={personalData.estado.toUpperCase()}
                secondTitle="CEP"
                secondText={formatZIPCode(personalData.cep)}
              />

              <Item title="Cidade" text={personalData.cidade} />
              <Item title="Endereço" text={personalData.endereco} />

              <Item
                type="compound"
                title="Telefone fixo"
                text={formatPhoneNumber(personalData.telefoneFixo)}
                secondTitle="Telefone celular"
                secondText={formatPhoneNumber(personalData.telefoneCelular)}
              />
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
