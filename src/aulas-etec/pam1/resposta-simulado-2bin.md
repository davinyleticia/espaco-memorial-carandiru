---
layout: "base.njk"
description: Simulado da Prova
title:  Resposta - Simulado Prova 2Bin
---
# Resposta do Simulado 2 Bim

```
import React from 'react';
import { SafeAreaView, SectionList, Text, View, StyleSheet } from 'react-native';

// 1. Dados fornecidos
const menuDoRestaurante = [
  {
    title: "Entradas",
    data: [
      { id: '1', nome: "Pão de Alho", preco: "R$ 15,00" },
      { id: '2', nome: "Batata Frita", preco: "R$ 20,00" }
    ]
  },
  {
    title: "Pratos Principais",
    data: [
      { id: '3', nome: "Lasanha à Bolonhesa", preco: "R$ 45,00" },
      { id: '4', nome: "Filé Mignon", preco: "R$ 65,00" }
    ]
  },
  {
    title: "Sobremesas",
    data: [
      { id: '5', nome: "Pudim", preco: "R$ 12,00" }
    ]
  }
];

const Cardapio = () => {
  
  // 2. Renderização dos Itens (Pratos)
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemNome}>{item.nome}</Text>
      <Text style={styles.itemPreco}>{item.preco}</Text>
    </View>
  );

  // 3. Renderização do Cabeçalho da Seção (Categorias)
  const renderSectionHeader = ({ section }) => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitulo}>{section.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        // Propriedade obrigatória para SectionList (diferente do 'data' do FlatList)
        sections={menuDoRestaurante} 
        
        // 4. Performance: Extração de chaves únicas
        keyExtractor={(item) => item.id} 
        
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        
        // Mantém o cabeçalho fixo no topo enquanto rola os itens daquela seção
        stickySectionHeadersEnabled={true} 
      />
    </SafeAreaView>
  );
};

// Estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  headerContainer: {
    backgroundColor: '#343A40',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  headerTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  itemNome: {
    fontSize: 16,
    color: '#212529',
  },
  itemPreco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#198754',
  },
});

export default Cardapio;
```