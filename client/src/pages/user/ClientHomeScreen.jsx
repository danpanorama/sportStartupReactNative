import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchFilterBar from '../../components/filter/SearchFilterBar';
import CategoryList from '../../components/home/user/CategoryList';
import { categories } from '../../utils/database';
import CategoryFilter from '../../components/filter/CategoryFilter';

export default function ClientHomeScreen({ navigation }) {
  const handleCategoryPress = (category) => {
    navigation.navigate('GamesScreen', { category });
  };

  return (
    <View style={styles.container}>
      {/* <SearchFilterBar /> */}
      <CategoryFilter/>
      <CategoryList categories={categories} onCategoryPress={handleCategoryPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
