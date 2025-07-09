import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Login');
    }, 2000); // 2 שניות לספלאש

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* תחליף את זה בלוגו שלך */}
      {/* <Image source={require('../assets/logo.png')} style={styles.logo} /> */}
      
      <Text style={styles.text}>ברוך הבא לאפליקציית תיווך הספורט!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"red" },
  logo: { width: 150, height: 150, marginBottom: 20 },
  text: { fontSize: 18, fontWeight: 'bold' },
});
