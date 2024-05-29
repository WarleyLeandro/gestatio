import { StyleSheet, Dimensions } from "react-native";

import theme from "../../../utils/theme";
const { height, width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.fild,
  },
  header: {
    padding: 20,
  },
  content: {
    flex: 1,

    paddingTop: 40,
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: theme.colors.shape,
  },
  title: {
    color: theme.colors.primary,
    fontSize: 34,
    fontWeight: "600",
  },
  subTitle: {
    color: theme.colors.gray_400,
    fontSize: 16,
    fontWeight: "400",
  },
  picker: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 8,
    marginBottom: 16,
  },

  containerButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  radioButton: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  radioButtonText: {
    fontSize: 16,
  },
  radioButtonSelected: {
    backgroundColor: theme.colors.gray_400,
  },
});
