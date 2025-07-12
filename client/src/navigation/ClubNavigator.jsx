import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ClubHomeScreen from '../pages/clubs/ClubHomeScreen';
// import ClubOtherScreen from '../pages/ClubOtherScreen';

const Stack = createNativeStackNavigator();

export default function ClubNavigator() { 
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ClubHome" component={ClubHomeScreen} />
      {/* <Stack.Screen name="ClubOther" component={ClubOtherScreen} /> */}
    </Stack.Navigator>
  );
}
