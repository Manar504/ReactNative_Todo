import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ToDoItem = ({ todo, handlePress, id }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Todo-Details', todo);
      }}
      style={styles.container}
    >
      <Text style={{ fontSize: 25 }}>{todo.title}</Text>
      <TouchableOpacity
        onPress={() => handlePress(id)}
        style={[styles.button, Platform.OS === 'ios' && { backgroundColor: 'red' }]}
      >
        <Text>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  button: {
    padding:10,
    backgroundColor: 'gray',
    borderRadius: 5,
    width:100,
  },
});

export default ToDoItem;