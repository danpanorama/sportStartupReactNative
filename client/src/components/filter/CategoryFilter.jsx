import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  Button,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { categories } from '../../utils/database'; // תקן את הנתיב לפי הצורך

const CATEGORIES = categories.map((cat) => cat.name.trim());

export default function CategoryFilter({ onFilterChange }) {
  const [searchText, setSearchText] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);
  const [radius, setRadius] = useState(10);
  const [date, setDate] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const applyFilter = () => {
    onFilterChange({ searchText, radius, date, selectedCategories });
    setFilterVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* שורת חיפוש + כפתור סינון בשורה אחת */}
      <View style={styles.searchAndFilterContainer}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#555" />
          <TextInput
            style={styles.searchInput}
            placeholder="חפש משחקים..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setFilterVisible(true)}
        >
          <Text style={styles.filterButtonText}>סינון</Text>
        </TouchableOpacity>
      </View>

      {/* מודל הסינון */}
      <Modal
        visible={filterVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setFilterVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView>
              <Text style={styles.modalTitle}>סינון משחקים</Text>

              {/* מרחק */}
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

              {/* תאריך */}
              <Text>תאריך (yyyy-mm-dd):</Text>
              <TextInput
                style={styles.dateInput}
                placeholder="2025-07-09"
                value={date}
                onChangeText={setDate}
              />

              {/* קטגוריות */}
              <Text style={{ marginTop: 20, fontWeight: 'bold' }}>קטגוריות:</Text>
              {CATEGORIES.map((category) => (
                <TouchableOpacity
                  key={category}
                  onPress={() => toggleCategory(category)}
                  style={styles.categoryOption}
                >
                  <Ionicons
                    name={
                      selectedCategories.includes(category)
                        ? 'checkbox'
                        : 'square-outline'
                    }
                    size={20}
                    color="#333"
                  />
                  <Text style={{ marginLeft: 10 }}>{category}</Text>
                </TouchableOpacity>
              ))}

              {/* כפתורים */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}
              >
                <Button title="בטל" onPress={() => setFilterVisible(false)} />
                <Button title="אשר" onPress={applyFilter} />
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#000',
  },
  searchAndFilterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10, // ברגע שה-react-native תומך, או אפשר להחליף ל-marginRight/Left
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    height: '100%',
  },
    // '#ff0000', '#cc0000', '#8b0000'
  filterButton: {
    backgroundColor:  '#cc0000',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  filterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    maxHeight: '90%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginTop: 5,
    marginBottom: 15,
  },
  categoryOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
});
