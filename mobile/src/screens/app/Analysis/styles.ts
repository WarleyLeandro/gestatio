import { StyleSheet, Dimensions } from "react-native";

import theme from "../../../utils/theme";
const { height, width } = Dimensions.get("window");
export const style = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: theme.colors.shape,
  },
  textBox: {
      marginVertical: 10,
      width: '90%',
      backgroundColor: theme.colors.fild,
      height: 80,
      borderRadius: 8,
      alignSelf: "center",
      shadowColor: theme.colors.gray_100,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  }
});
