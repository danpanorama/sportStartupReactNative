// components/ErrorMessage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { clearError } from '../../redux/slices/errorSlice';

export default function ErrorMessage() {
  const error = useSelector((state) => state.error.message);
  const dispatch = useDispatch();

  if (!error) return null;

  // אפשר להוסיף setTimeout או כפתור לסגירה ידנית
  setTimeout(() => {
    dispatch(clearError());
  }, 4000); // נעלם אחרי 4 שניות

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff4d4d',
    padding: 12,
    borderRadius: 8,
    margin: 10,
    position: 'absolute',
    top: 50,
    left: 10,
    right: 10,
    zIndex: 999,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
