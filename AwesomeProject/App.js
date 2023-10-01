import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ borderWidth: 1, borderColor: "red", padding: 2 }}>
        Hello there g
      </Text>
      <Text style={styles.dummyText}>Hello text 2</Text>
      <Button title="click here" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    borderWidth: 1,
    borderColor: "blue",
    padding: 2,
    marginTop: 5,
  },
});
