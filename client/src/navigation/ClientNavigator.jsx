import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientLayout from '../components/user/ClientLayout';
import ClientHomeScreen from '../pages/user/ClientHomeScreen';
import ClientGameScreen from '../pages/user/ClientGameScreen'; // תקן נתיב

const Stack = createNativeStackNavigator();

function WrappedClientHomeScreen(props) {
  return (
    <ClientLayout>
      <ClientHomeScreen {...props} />
    </ClientLayout>
  );
}


function GamesScreenWrapped(props) {
  return (
    <ClientLayout>
      <ClientGameScreen {...props} />
    </ClientLayout>
  );
}

export default function ClientNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ClientHome" component={WrappedClientHomeScreen} />
      <Stack.Screen name="GamesScreen" component={GamesScreenWrapped} />
    </Stack.Navigator>
  );
}
