import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Login from './Login';

export default function Home({ navigation }) {
  const handleLogout = () => {
 
  };

  const handleGoToLogin = () => {
    
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Bem-vindo à Tela Home</Text>
      {/* Conteúdo da tela Home */}
      <Button title="Sair" onPress={handleLogout} />
      <Button title="Ir para Login" onPress={handleGoToLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    marginVertical: 10,
  },
});
