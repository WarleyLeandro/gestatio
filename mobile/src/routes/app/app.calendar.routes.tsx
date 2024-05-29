import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { CalendarRoutesParams } from "../routes";

import Calendar from "../../screens/app/Calendar";

const { Navigator, Screen } = createStackNavigator<CalendarRoutesParams>();

export function CalendarRoutes() {
  return (
    <Navigator
      initialRouteName={"Calendar"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Calendar" component={Calendar} />
    </Navigator>
  );
}
