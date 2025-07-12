import React from 'react';
import { View, StyleSheet } from 'react-native';
import ClientNavbar from './ClientNavBar';

export default function ClientLayout({ children }) {
  return (
    <View style={styles.container}>
          <ClientNavbar />
      <View style={styles.content}>
        {children}
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
});
