import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* header */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="enter your goal" />
        <Button title="add goal" />
      </View>
      <View>
        <TextInput>List of goals</TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "blue",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "blue",
    width: "70%",
    padding: 5,
    marginRight: 5,
  },
});
