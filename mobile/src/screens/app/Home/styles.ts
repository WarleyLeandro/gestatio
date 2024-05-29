import { StyleSheet, Dimensions } from "react-native";

import theme from "../../../utils/theme";
const { height, width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fafafa",
  },
  boxText: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
    backgroundColor: "#fff",
    margin: 12,

    shadowColor: theme.colors.gray_100,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  boxCard: {
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  card: {
    width: "44%",
    height: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 8,
    elevation: 6,
  },
  text: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: "700",
  },
});
