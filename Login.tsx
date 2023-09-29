import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Icon } from 'react-native-elements';

export default function App() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (login === 'admin' && senha === '1234') {
      Alert.alert('Login realizado com sucesso!');
    } else {
      Alert.alert('Login falhou. Verifique suas informações.');
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="user" type="font-awesome" size={40} />
      <Text style={styles.label}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o login"
        onChangeText={(text) => setLogin(text)}
        value={login}
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a senha"
        onChangeText={(text) => setSenha(text)}
        value={senha}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />
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
    marginVertical: 5,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});
