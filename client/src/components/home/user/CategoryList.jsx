// components/home/user/CategoryList.jsx

import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import GameSlider from './GameSlider';

export default function CategoryList({ categories, onCategoryPress }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => onCategoryPress(item)}>
      
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.menuBtn}>⋯

</Text>

      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // אפשר לשנות ל-1 אם רוצים תצוגה אנכית
        contentContainerStyle={styles.listContent}
      />
{/* <GameSlider games={games} title="🕹️ משחקים אחרונים" /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'black',
    minHeight:"100%",
  },
  menuBtn:{
    color:'white',
    textAlign:'right',
    fontSize:22,
  },
  listContent: {
    gap: 10,
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 80,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    color: '#ccc',
  },
});
