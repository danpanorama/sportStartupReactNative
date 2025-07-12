import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/userSlice';

export default function ClientNavBar({ onMenuPress }) {
    const dispatch = useDispatch();
  return (
    <View style={styles.container}>
   <TouchableOpacity style={styles.menuButton} onPress={onMenuPress}>
        <View style={styles.bar} />
        <View style={styles.bar} />
        <View style={styles.bar} />
      </TouchableOpacity>

   
      <Text onPress={() => dispatch(logout())} style={styles.title}>SPORT
        
     <Text style={{ color: '#cc0000',fontSize:23 }}>S</Text>
        </Text>

    
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: '#000', // כחול דינמי
    flexDirection: 'row-reverse', // כדי שההמבורגר יהיה בצד ימין
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom:30,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  menuButton: {
    width: 30,
    justifyContent: 'space-between',
    height: 20,
  },
  bar: {
    height: 3,
    backgroundColor: 'white',
    borderRadius: 2,
  },
});
