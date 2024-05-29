import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { InitialRoutesParams } from "../routes";

import SignIn from "../../screens/auth/SignIn";
import SignUp from "../../screens/auth/SignUp";
import ForgotPassword from "../../screens/auth/ForgotPassword";
import PersonalData from "../../screens/auth/PersonalData";
import PatientEmergency from "../../screens/auth/PatientEmergency";
import PatientSus from "../../screens/auth/PatientSus";

const { Navigator, Screen } = createStackNavigator<InitialRoutesParams>();

export function InitialRoutes() {
  return (
    <Navigator
      initialRouteName={"SignIn"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="PersonalData" component={PersonalData} />
      <Screen name="PatientEmergency" component={PatientEmergency} />
      <Screen name="PatientSus" component={PatientSus} />
    </Navigator>
  );
}
