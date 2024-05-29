import { StyleSheet, Dimensions } from "react-native";

import theme from "../../utils/theme";
const { height, width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemDoubleContainer: {
    width: "50%",
    paddingHorizontal: 4,
  },
  titleText: {
    fontSize: theme.fonts.text,
    fontWeight: "500",
    color: theme.colors.secundary,
  },
  contentText: {
    fontSize: theme.fonts.text,
    color: theme.colors.gray_400,
  },
});
