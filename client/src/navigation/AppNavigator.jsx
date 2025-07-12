import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from '../pages/SplashScreen';
import LoginScreen from '../pages/LoginScreen';
import ClientNavigator from './ClientNavigator';
import ClubNavigator from './ClubNavigator';

export default function AppNavigator({ user }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setLoading(false);
    };
    checkAuth();
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <NavigationContainer>
      {!user ? (
        <LoginScreen />
      ) : user.role === 'club' ? (
        <ClubNavigator />
      ) : user.role === 'client' ? (
        <ClientNavigator />
      ) : (
        <LoginScreen /> 
      )}
    </NavigationContainer>
  );
}
