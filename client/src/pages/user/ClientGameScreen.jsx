// import React from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import SearchFilterBar from '../../components/filter/SearchFilterBar';

// export default function ClientGameScreen({ navigation, route }) {
//   const { category } = route.params || {};

//   const games = category?.games || [];

//   const renderGame = ({ item }) => (
//     <View style={styles.gameCard}>
//       <Text style={styles.dateText}>{item.date}</Text>
//       <Text style={styles.teamsText}>
//         {item.homeTeam} נגד {item.awayTeam}
//       </Text>
//       <View style={styles.detailsRow}>
//         <Text style={styles.detailText}>{item.location}</Text>
//         <Text style={styles.detailText}>שעה: {item.time}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* <Text style={styles.title}>משחקים בקטגוריה: {category?.name || 'לא ידוע'}</Text> */}
// <SearchFilterBar/>
//       <FlatList
//         data={games}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderGame}
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
    
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   listContainer: {
   
//     paddingBottom: 30,
//   },
//   gameCard: {
//     backgroundColor: '#fff',
   
//     padding: 15,
//     marginBottom: 0,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   dateText: {
//     fontSize: 14,
//     color: '#888',
//     marginBottom: 5,
//     textAlign: 'right',
//   },
//   teamsText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   detailsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   detailText: {
//     fontSize: 14,
//     color: '#444',
//   },
// });


// ClientGameScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import GameList from '../../components/home/user/GameList';  // נתיב בהתאם למיקום שלך

export default function ClientGameScreen({ route }) {
  const { category } = route.params || {};
  const games = category?.games || [];

  return (
    <View style={styles.container}>
      <GameList games={games} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
