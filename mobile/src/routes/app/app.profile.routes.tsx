import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { ProfileRoutesParams } from "../routes";

import Profile from "../../screens/app/Profile";
import ProfilePersonal from "../../screens/app/ProfilePersonal";
import ProfileSUS from "../../screens/app/ProfileSUS";
import ProfileEmergency from "../../screens/app/ProfileEmergency";
import ProfilePolicy from "../../screens/app/ProfilePolicy";
import ProfileFAQ from "../../screens/app/ProfileFAQ";
import ProfileSupport from "../../screens/app/ProfileSupport";
import ProfileTerms from "../../screens/app/ProfileTerms";

import theme from "../../utils/theme";

const { Navigator, Screen } = createStackNavigator<ProfileRoutesParams>();

export function ProfileRoutes() {
  return (
    <Navigator
      initialRouteName={"Profile"}
      screenOptions={{
        headerShown: false,
        title: "Perfil",
        headerStyle: {},
        headerTintColor: theme.colors.title,
      }}
    >
      <Screen name="Profile" component={Profile} />
      <Screen name="ProfilePersonal" component={ProfilePersonal} />
      <Screen name="ProfileSUS" component={ProfileSUS} />
      <Screen name="ProfileEmergency" component={ProfileEmergency} />
      <Screen name="ProfilePolicy" component={ProfilePolicy} />
      <Screen name="ProfileFAQ" component={ProfileFAQ} />
      <Screen name="ProfileSupport" component={ProfileSupport} />
      <Screen name="ProfileTerms" component={ProfileTerms} />
    </Navigator>
  );
}
