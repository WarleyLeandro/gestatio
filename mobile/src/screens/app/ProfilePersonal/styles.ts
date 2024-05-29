import { StyleSheet, Dimensions } from "react-native";

import theme from "../../../utils/theme";
const { height, width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.shape,
  },

  bodyProfile: {
    alignItems: "center",
    marginTop: 20,
  },
  menuProfile: {
    margin: 24,
    backgroundColor: theme.colors.shape,
    padding: 16,
    borderRadius: 8,
    shadowColor: theme.colors.gray_400,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
