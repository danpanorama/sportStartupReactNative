import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/UserActions';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const handleLogin = () => {
    
    dispatch(login({ username, password }));
  };

  return (
    <LinearGradient
  colors={['#ff0000', '#cc0000', '#8b0000']}
  locations={[0, 0.4, 1]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={styles.gradient}
>
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <View style={styles.headerContainer}>
      <Text style={styles.header}>SPORTS</Text>
    </View>

    <View style={styles.container}>
      <TextInput
        placeholder="שם משתמש"
        placeholderTextColor="#fff"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="סיסמה"
        placeholderTextColor="#fff"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>התחבר</Text>
      </TouchableOpacity>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  </View>

  <View style={styles.googleButtonsDiv}>
  <TouchableOpacity style={styles.googleButtons}>
    <FontAwesome name="google" size={40} color="#DB4437" style={styles.icon} />
    <Text style={styles.googleText}>התחברות עם Google</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.googleButtons}>
    <FontAwesome name="facebook" size={40} color="#DB4437" style={styles.icon} />
    <Text style={styles.googleText}>התחברות עם Facebook</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.googleButtons}>
    <FontAwesome name="envelope" size={40} color="#DB4437" style={styles.icon} />
    <Text style={styles.googleText}>התחברות עם Email</Text>
  </TouchableOpacity>
</View>

</LinearGradient>

  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
googleButtons: {
  width: '90%',
  height: 65,
  backgroundColor: '#fff',
  marginBottom: 10,
  borderRadius: 30,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 20,
},
icon: {
  marginRight: 10,
},

googleText: {
  color: '#000',
  fontSize: 22,
  fontWeight: 'bold',
},

 headerContainer: {
  position: 'absolute',
  top: 200,
  left: 0,
  right: 0,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
},

  header:{
    fontSize:50,
    color:"#fff"

  },

  buttonText:{
color:'white',
fontSize:22,
},
  button:{
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
    padding: 10,
    height:65,
    width:"50%",
    marginBottom: 15,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 20,
    alignSelf:'center'
  },
googleButtonsDiv: {
  position: 'absolute',
  bottom: 20,
  left: 0,
  right: 0,
  alignItems: 'center',
  justifyContent: 'center',
},


  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
   
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
    padding: 10,
    height:65,
    marginBottom: 15,
    textAlign:'right',
    borderRadius: 20,
  },
  error: {
    color: '#ffaaaa',
    marginTop: 10,
  },
});
