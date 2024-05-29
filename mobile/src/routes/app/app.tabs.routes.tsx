import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import { HomeRoutes } from "./app.home.routes";
import { InfoRoutes } from "./app.info.routes";
import { ProfileRoutes } from "./app.profile.routes";
import { CalendarRoutes } from "./app.calendar.routes";
import { AnalysisRoutes } from "./app.analysis.routes";

import { AppRoutesParams } from "../routes";

import theme from "../../utils/theme";
const { colors } = theme;
const { Navigator, Screen } = createBottomTabNavigator<AppRoutesParams>();
export default function AppTabsRoutes() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.shape,
        tabBarInactiveTintColor: colors.primary_30,
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          height: 80,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeScreens") {
            iconName = focused ? "th-large" : "th-large";
          } else if (route.name === "AnalysisScreens") {
            iconName = focused ? "bar-chart" : "bar-chart-o";
          } else if (route.name === "InfoScreens") {
            iconName = focused ? "id-card" : "id-card-o";
          } else if (route.name === "CalendarScreens") {
            iconName = focused ? "calendar" : "calendar";
          } else if (route.name === "ProfileScreens") {
            iconName = focused ? "user-circle" : "user-circle-o";
          }
          //@ts-ignore
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      initialRouteName={"HomeScreens"}
    >
      <Screen
        name="HomeScreens"
        component={HomeRoutes}
        options={
          {
            //headerShown: true,
          }
        }
      />
      <Screen name="AnalysisScreens" component={AnalysisRoutes} />
      <Screen name="InfoScreens" component={InfoRoutes} />
      <Screen name="CalendarScreens" component={CalendarRoutes} />
      <Screen name="ProfileScreens" component={ProfileRoutes} />
    </Navigator>
  );
}
