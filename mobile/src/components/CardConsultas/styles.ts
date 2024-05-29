import { StyleSheet, Dimensions } from "react-native";

import theme from "../../utils/theme";
const { height, width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: theme.colors.shape,
  },

  bodyProfile: {
    alignItems: "center",
    marginTop: 0,
  },
  menuProfile: {
    width: width * 0.86,
    marginHorizontal: 24,
    marginVertical: 12,
    backgroundColor: theme.colors.shape,
    padding: 10,
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
  itemContainer: {
    justifyContent: "space-between",

    marginBottom: 10,
  },
  titleText: {
    fontSize: theme.fonts.subText,
    fontWeight: "500",
    color: theme.colors.secundary,
  },
  contentText: {
    fontSize: theme.fonts.subText,
    color: theme.colors.gray_400,
  },
});
