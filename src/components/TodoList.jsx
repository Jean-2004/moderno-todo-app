import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const { todos, selectedTab } = props
  
  const filterTodosList = selectedTab === 'Todos' ? 
    todos :
    selectedTab === 'Completados' ?
      todos.filter(val => val.complete) :
      todos.filter(val => !val.complete)

  return (
    <div>
      {filterTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard 
          key={todoIndex}
          todoIndex={todos.findIndex(val => val.input == todo.input)}
          {...props} 
          todo={todo} />
        )
      })}
    </div>
  )
}
