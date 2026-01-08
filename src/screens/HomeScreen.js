import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/imagem/eco.png')}
      style={styles.background}
    >

      <View style={styles.overlay}>
        <Text style={styles.title}>🌱 Eco Resíduos</Text>

        <Text style={styles.text}>
          Aprenda a separar resíduos e cuidar do ambiente.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Guia')}
          >
            <MaterialIcons name="recycling" size={22} color="#fff" />
            <Text style={styles.buttonText}>Guia de Separação</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Dicas')}
          >
            <MaterialIcons name="eco" size={22} color="#fff" />
            <Text style={styles.buttonText}>Dicas Ecológicas</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },

  text: {
    fontSize: 16,
    color: '#eee',
    textAlign: 'center',
    marginBottom: 30,
  },

  buttonContainer: {
    width: '100%',
    marginBottom: 15,
  },

  button: {
    backgroundColor: 'rgba(46, 125, 50, 0.95)',
    paddingVertical: 14,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    elevation: 3,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16, 
    fontWeight: '600',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#ffffffff',
  },
});
