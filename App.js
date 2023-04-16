import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import GradientBackground from "./components/Gradient";
import JourneyCost from "./components/JourneyCost";

const App =() => {
  return (
    <GradientBackground>
      <View style={styles.container}>
        {/* <StatusBar  backgroundColor="transparent"/> */}
        <JourneyCost />
      </View>
    </GradientBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF000000',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App;