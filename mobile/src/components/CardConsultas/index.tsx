import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

import { useInfoNavigation } from "../../hooks/navigation";
import { ConsultasTypes } from "../../@types/signIn.interface";
import Item from "../Item";
import { formatDateString } from "../../utils/functions/formatFormView";
import TextApp from "../Text";
import theme from "../../utils/theme";

type CardProps = {
  item: ConsultasTypes;
};

export default function CardConsultas({ item }: CardProps) {
  const navigation = useInfoNavigation();

  return (
    <View style={styles.menuProfile}>
      <View
        style={{
          paddingVertical: 8,

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextApp
          size={16}
          isBold
          color={theme.colors.primary}
          text={`Consulta do dia: ${formatDateString(
            String(item.dataConsulta)
          )}`}
        />
      </View>

      <Item
        type="compound"
        title="Idade gestacional DUM"
        text={item.idadeGestacionalDUM}
        secondTitle="Idade gestacional USG"
        secondText={item.idadeGestacionalUSG}
      />

      <Item
        type="compound"
        title="Peso"
        text={`${item.peso} kg`}
        secondTitle="IMC"
        secondText={item.IMC}
      />
      <Item title="Queixa" text={item.queixa} />
      <Item title="Apresentação fetal" text={item.apresentacaoFetal} />
      <Item
        title="Observação, diagnóstico e conduta"
        text={item.observacaoDiagnosticoConduta}
      />

      <Item
        type="compound"
        title="Pressão arterial"
        text={item.pressaoArterial}
        secondTitle="Altura uterina"
        secondText={`${item.alturaUterina} cm`}
      />

      <Item
        type="compound"
        title="Movimento Fetal"
        text={item.movimentoFetal}
        secondTitle="Batimento Cardíaco Fetal"
        secondText={`${item.batimentoCardiacoFetal} bpm`}
      />

      <Item
        type="compound"
        title="Exantema"
        text={item.exantema}
        secondTitle="Toque, se indicado"
        secondText={item.toque}
      />
    </View>
  );
}
