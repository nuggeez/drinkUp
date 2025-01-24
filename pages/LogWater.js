import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';

export default function LogWater({ navigation }) {
  const [waterIntake, setWaterIntake] = useState('');
  const [progress, setProgress] = useState(0);
  const goal = 2000; // Daily water goal in ml (2L)

  const handleLogWater = () => {
    const intake = parseFloat(waterIntake);
    if (!isNaN(intake) && intake > 0) {
      setProgress((prev) => prev + intake);
      setWaterIntake('');
    }
  };

  return (
    <>
      {/* Header without container */}
      <Header title="Water Intake!" />

      {/* Image before the text */}
      <Image source={require('../assets/background.png')} style={styles.image} />

      <ProgressBar progress={progress} goal={goal} />
      <Text style={styles.progressText}>
        {progress}ml / {goal}ml
      </Text>

      <Text style={styles.label}>Enter water intake (in ml):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={waterIntake}
        onChangeText={setWaterIntake}
        placeholder="e.g., 250"
      />

      {/* Styled "Log Water" button */}
      <TouchableOpacity style={styles.button} onPress={handleLogWater}>
        <Text style={styles.buttonText}>Log Water</Text>
      </TouchableOpacity>

      {/* Space between buttons */}
      <View style={{ marginVertical: 10 }} />

      {/* Styled "View Summary" button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Summary', { progress, goal })}>
        <Text style={styles.buttonText}>View Summary</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    marginTop: 30,
    alignSelf: 'center',
  },
  label: {
    marginVertical: 10,
    fontSize: 16,
    color: '#2C3E50',
    marginTop: 25,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    color: '#2C3E50',
    alignSelf: 'center',
  },
  progressText: {
    fontSize: 16,
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#5dade2', // Blue color for the button
    borderRadius: 25, // Rounded edges
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
    textAlign: 'center',
  },
});
