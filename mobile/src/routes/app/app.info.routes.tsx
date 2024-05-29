import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { InfoRoutesParams } from "../routes";

import Info from "../../screens/app/Info";
import InfoPreNatal from "../../screens/app/InfoPreNatal";
import InfoConsulta from "../../screens/app/InfoConsulta";
import InfoExame from "../../screens/app/InfoExame";
import InfoAntecedente from "../../screens/app/InfoAntecedente";

const { Navigator, Screen } = createStackNavigator<InfoRoutesParams>();

export function InfoRoutes() {
  return (
    <Navigator
      initialRouteName={"Info"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Info" component={Info} />
      <Screen name="InfoPreNatal" component={InfoPreNatal} />
      <Screen name="InfoConsulta" component={InfoConsulta} />
      <Screen name="InfoExame" component={InfoExame} />
      <Screen name="InfoAntecedente" component={InfoAntecedente} />
    </Navigator>
  );
}
