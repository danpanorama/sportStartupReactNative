import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/userSlice';

export default function HomeScreen() {
  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ברוך הבא, {user?.username}</Text>
      <Text style={styles.text}>תפקיד: {user?.role}</Text>
      <Button title="התנתק" onPress={() => dispatch(logout())} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, alignItems: 'center' },
  text: { fontSize: 18, marginBottom: 10 },
});
