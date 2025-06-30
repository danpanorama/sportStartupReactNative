import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ username, password }));
    // כאן ניתן להוסיף לוגיקה לוודא אם התחברנו או לא
    // או להשתמש ב-selectors ב-AppNavigator לעדכון UI
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="שם משתמש"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="סיסמה"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="התחבר" onPress={handleLogin} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  error: { color: 'red', marginTop: 10 },
});
