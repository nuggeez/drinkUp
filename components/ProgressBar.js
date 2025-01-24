import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ProgressBar({ progress, goal }) {
  const progressPercentage = Math.min((progress / goal) * 100, 100);

  return (
    <View style={styles.container}>
      <View style={[styles.bar, { width: `${progressPercentage}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: '90%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 15,
    alignSelf: 'center',
  },
  bar: {
    height: '100%',
    backgroundColor: '#5dade2',
  },
});
