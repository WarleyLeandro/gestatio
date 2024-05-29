import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { AnalysisRoutesParams } from "../routes";

import Analysis from "../../screens/app/Analysis";

const { Navigator, Screen } = createStackNavigator<AnalysisRoutesParams>();

export function AnalysisRoutes() {
  return (
    <Navigator
      initialRouteName={"Analysis"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Analysis" component={Analysis} />
    </Navigator>
  );
}
