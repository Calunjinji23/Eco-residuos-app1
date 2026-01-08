import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function GuiaScreen() {
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
  const residuos = [
    {
      id: '1',
      tipo: 'Plástico',
      descricao: 'Garrafas PET, sacolas e embalagens plásticas.',
      icon: 'recycling',
      cor: '#2e7d32',
    },
    {
      id: '2',
      tipo: 'Papel',
      descricao: 'Jornais, revistas, caixas de papelão.',
      icon: 'description',
      cor: '#1565c0',
    },
    {
      id: '3',
      tipo: 'Vidro',
      descricao: 'Garrafas, frascos e potes de vidro.',
      icon: 'wine-bar',
      cor: '#6a1b9a',
    },
    {
      id: '4',
      tipo: 'Orgânico',
      descricao: 'Restos de alimentos e resíduos biodegradáveis.',
      icon: 'eco',
      cor: '#ef6c00',
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guia de Separação de Resíduos</Text>

      <FlatList
        data={residuos}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
              <MaterialIcons name={item.icon} size={30} color={item.cor} />
            </Animated.View>
            <Text style={styles.cardTitle}>{item.tipo}</Text>
            <Text style={styles.cardText}>{item.descricao}</Text>
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
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
  },
});