import { View, Text } from 'react-native'
import React from 'react'
import ToDoItem from './Todo'

const Todos = ({todos,handlePress,}) => {
  return (

    <View>  
  {todos.map((todo)=>{
  return  <ToDoItem  todo={todo} key={todo.id} id={todo.id} handlePress={handlePress} ></ToDoItem>
})}
      
    </View>
  )
}

export default Todos