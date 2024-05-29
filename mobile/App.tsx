import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Routes } from "./src/routes";

import { navigationRef } from "./src/routes/RootNavigation";
import { AuthProvider } from "./src/contexts/useAuth";
import { FormProvider } from "./src/contexts/useForm";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthProvider>
        <FormProvider>
          <Routes />
        </FormProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
