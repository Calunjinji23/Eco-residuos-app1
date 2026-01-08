import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function DicasScreen() {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);
  const [novaDica, setNovaDica] = useState('');

  const [dicas, setDicas] = useState([]);

  useEffect(() => {
    const dadosIniciais = [
      {
        id: '1',
        titulo: 'Economize Água',
        texto: 'Feche a torneira ao escovar os dentes.',
        icon: 'water-drop',
        cor: '#0277bd',
      },
      {
        id: '2',
        titulo: 'Reduza o Plástico',
        texto: 'Use sacolas reutilizáveis.',
        icon: 'shopping-bag',
        cor: '#2e7d32',
      },
    ];

    setDicas(dadosIniciais);
  }, []);

  const adicionarDica = () => {
    if (novaDica.trim() === '') {
      return;
    }

    const nova = {
      id: Date.now().toString(),
      titulo: 'Nova Dica',
      texto: novaDica,
      icon: 'eco',
      cor: '#388e3c',
    };

    setDicas([...dicas, nova]);
    setNovaDica('');
  };
  const removerDica = (id) => {
    setDicas(dicas.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dicas Ecológicas</Text>

      <TextInput
        style={styles.input}
        placeholder="Escreva uma nova dica ecológica"
        value={novaDica}
        onChangeText={setNovaDica}
      />

      <TouchableOpacity style={styles.addButton} onPress={adicionarDica}>
        <Text style={styles.addButtonText}>Adicionar Dica</Text>
      </TouchableOpacity>

      <FlatList
        data={dicas}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                <MaterialIcons name={item.icon} size={30} color={item.cor} />
              </Animated.View>
              <Text style={styles.cardTitle}>
                {item.titulo ? item.titulo : 'Dica Ecológica'}
              </Text>
            </View>

            <Text style={styles.cardText}>{item.texto}</Text>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => removerDica(item.id)}
            >
              <MaterialIcons name="delete" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f8f4',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardText: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },

  addButton: {
    backgroundColor: '#2e7d32',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },

  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#c62828',
    padding: 6,
    borderRadius: 6,
    marginTop: 10,
  },
  cardHeader: {
    alignItems: 'center',
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
  },
});