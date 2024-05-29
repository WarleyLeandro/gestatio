import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

import { ExamesType, PositivoNegativo } from "../../@types/signIn.interface";
import Item from "../Item";

type CardProps = {
  item: ExamesType;
};

export default function CardExames({ item }: CardProps) {
  return (
    <View style={styles.menuProfile}>
      <Item
        type="compound"
        title="Sífilis"
        text={PositivoNegativo[item?.sifilis]}
        secondTitle="VDRL"
        secondText={PositivoNegativo[item?.vdrl]}
      />
      <Item
        type="compound"
        title="HIV antiHIV"
        text={PositivoNegativo[item?.hiv_antiHiv]}
        secondTitle="Hepatite B"
        secondText={PositivoNegativo[item?.hepatiteB]}
      />
      <Item
        type="compound"
        title="Toxoplasmose"
        text={PositivoNegativo[item?.toxoplasmose]}
        secondTitle="ABO RH"
        secondText={item?.ABO_RH}
      />

      <Item title="Glicemia Jejum" text={item?.glicemiaJejum} />
      <Item
        title="Teste Oral Tolerancia Glicose"
        text={item?.testeOralToleranciaGlicose}
      />
      <Item
        title="Hemoglobina Hematocrito"
        text={item?.hemoglobina_hematocrito}
      />
      <Item title="Urina EAS" text={item?.urinaEAS} />
      <Item title="Urina Cultura" text={item?.urinaCultura} />
      <Item title="Coombs Indireto" text={item?.coombsIndireto} />
    </View>
  );
}
