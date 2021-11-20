import React from 'react';
import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
import contacts from '../../assets/data/contacts.json';

const ContactScreen = () => {
  return (
    <View style={styles.page}>
      <TextInput style={styles.searchInput} placeholder="Search..." />
      <FlatList
        data={contacts}
        renderItem={({item}) => (
          <Text style={styles.contactName}>{item.user_display_name}</Text>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  contactName: {
    fontSize: 16,
    marginVertical: 10,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f0f0f0',
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
});
