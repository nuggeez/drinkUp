import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';

export default function Summary({ route, navigation }) {
  const { progress, goal } = route.params;

  return (
    <>
      {/* Header without a container */}
      <Header title="Drink Up Summary" />

      <ProgressBar progress={progress} goal={goal} />
      <Text style={styles.summaryText}>
        Total Water Intake: {progress}ml / {goal}ml
      </Text>

      {/* Styled "Reset" button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.reset({ index: 0, routes: [{ name: 'DrinkUp' }] })}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>

      {/* Space between buttons */}
      <View style={{ marginVertical: 10 }} />

      {/* Styled "New Log" button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DrinkUp')}>
        <Text style={styles.buttonText}>New Log</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  summaryText: {
    marginVertical: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#5dade2', 
    borderRadius: 25, 
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
