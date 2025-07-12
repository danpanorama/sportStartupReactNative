import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function GameSlider({ games, title = 'משחקים אחרונים' }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.teams}>{item.homeTeam} נגד {item.awayTeam}</Text>
      <Text style={styles.info}>🕒 {item.time} | 📅 {item.date}</Text>
      <Text style={styles.info}>📍 {item.location}</Text>
      <Text style={styles.info}>🧑‍⚕️ צוותים רפואיים: {item.medics}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={games}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  listContent: {
    paddingHorizontal: 10,
    gap: 10,
  },
  card: {
    width: 200,
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 12,
    marginRight: 10,
  },
  teams: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  info: {
    fontSize: 13,
    color: '#ccc',
    marginBottom: 2,
  },
});
