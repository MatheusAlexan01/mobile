import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, FlatList, SafeAreaView } from 'react-native';
import { list } from './data';
import { ProdutcItem } from './componentes/listaprodutos';
import { Produtos } from './types/produto';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Image
        source={require('./assets/livraria.jpg')}
        resizeMode='cover'
        style={styles.hero}
      />
      <View style={styles.titulo}>
        <Text style={styles.h1}>Produtos</Text>
      </View>

      <FlatList
        data={list}
        renderItem={({ item }: { item: Produtos }) => (<ProdutcItem produtos={item} />)}
        keyExtractor={item => item.id.toString()}
        horizontal={true}  // Define a rolagem horizontal
        showsHorizontalScrollIndicator={false}  // Oculta a barra de rolagem horizontal
        contentContainerStyle={styles.listContainer}  // Estiliza o container da lista
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hero: {
    width: '100%',
    height: 150
  },
  titulo: {
    marginTop: 20,
    height: 60,
    backgroundColor: '#FFCC01',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 20  // Ajustado para reduzir o espaço entre o título e a lista
  },
  h1: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  listContainer: {
    paddingHorizontal: 10  // Adiciona padding horizontal para espaçamento
  }
});
