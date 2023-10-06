import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentGoal) => [
      ...currentGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoal) => {
      return currentCourseGoal.filter((item) => item.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      {/* header */}
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        {/* <ScrollView>
          {courseGoals.map((goal, index) => {
            return (
              <View key={index} style={styles.goalItem}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            );
          })}
        </ScrollView> */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 4,
  },
});
