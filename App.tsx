import { ThemeProvider } from "styled-components";
import { Text, StyleSheet, View } from "react-native";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";
import { PlantOne } from "./src/pages/PlantOne";
import { PlantTwo } from "./src/pages/PlantTwo";
import { PlantThree } from "./src/pages/PlantThree";
import { PlantFour } from "./src/pages/PlantFour";
import { PlantFive } from "./src/pages/PlantFive";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Carregando</Text>
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <PlantOne />
      {/* <PlantTwo /> */}
      {/* <PlantThree /> */}
      {/* <PlantFour /> */}
      {/* <PlantFive /> */}
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
});
