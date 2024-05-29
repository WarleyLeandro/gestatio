import { StyleSheet, Dimensions } from "react-native";

import theme from "../../../utils/theme";
const { height, width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  paragraph: {
    fontSize: 16,
    marginTop: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
});
