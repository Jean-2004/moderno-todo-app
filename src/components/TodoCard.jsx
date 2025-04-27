import React, { useState } from 'react'

export default function TodoCard(props) {
  const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo, handleEditTodo } = props

  const [editingCard, setEditingCard] = useState(false)
  const [inputValue, setInputValue] = useState('')

  return (
    <div className='card todo-item'>
      {editingCard ? (<input value={inputValue} onChange={(e) => {
        setInputValue(e.target.value)
      }}></input>) : (<p>{todo.input}</p>)}
      <div className='todo-buttons'>
        <button onClick={() => {
          handleCompleteTodo(todoIndex)
        }}
        disabled={todo.complete || editingCard}>
          <h6>Done</h6>
        </button>
        <button onClick={() => {
          (editingCard ? handleEditTodo(todoIndex, inputValue) :
          setInputValue(todo.input))
          setEditingCard(!editingCard)
        }}>
          <h6>Edit</h6>
        </button>
        <button onClick={() => {
          handleDeleteTodo(todoIndex)
        }}
        disabled={editingCard}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  )
}
