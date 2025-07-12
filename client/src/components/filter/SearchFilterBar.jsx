import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Modal, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // אייקונים - אפשר להחליף לספרייה אחרת אם לא משתמשים באקספו
import Slider from '@react-native-community/slider'; // לסרגל הגרירה

export default function SearchFilterBar({ onFilterChange }) {
  const [searchText, setSearchText] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);
  const [radius, setRadius] = useState(10);
  const [date, setDate] = useState('');

  const applyFilter = () => {
    onFilterChange({ searchText, radius, date });
    setFilterVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* שורת החיפוש */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#555" />
        <TextInput
          style={styles.searchInput}
          placeholder="חפש משחקים..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* כפתור סינון */}
      <TouchableOpacity style={styles.filterButton} onPress={() => setFilterVisible(true)}>
        <Text style={styles.filterButtonText}>סינון</Text>
      </TouchableOpacity>

      {/* מודל הסינון */}
      <Modal
        visible={filterVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setFilterVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>סינון משחקים</Text>

            <Text>מרחק (ק"מ): {radius}</Text>
            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={1}
              maximumValue={100}
              step={1}
              value={radius}
              onValueChange={setRadius}
              minimumTrackTintColor="#1E90FF"
              maximumTrackTintColor="#000000"
            />

            <Text>תאריך (yyyy-mm-dd):</Text>
            <TextInput
              style={styles.dateInput}
              placeholder="2025-07-09"
              value={date}
              onChangeText={setDate}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
              <Button title="בטל" onPress={() => setFilterVisible(false)} />
              <Button title="אשר" onPress={applyFilter} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#000',
    alignItems: 'center',
  },

  searchContainer: {
    flex: 1,
    flexDirection: 'row',

    backgroundColor:  '#fff',
    borderRadius: 25,
    paddingHorizontal: 15, 
    paddingVertical: 6,
    alignItems: 'center',
    marginRight: 10,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
  filterButton: {
    backgroundColor: '#8b0000',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  filterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  dateInput: {
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginTop: 5,
  },
});
