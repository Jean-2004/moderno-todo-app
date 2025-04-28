import React from 'react'

export default function Header(props) {
  const { todos } = props
  const todosLength = todos.filter(val => !val.complete).length

  const isTasksPlural = todos.filter(val => !val.complete).length != 1

  const taskOrTasks = isTasksPlural ? 'tarefas ativas' : 'tarefa ativa'

  return (
    <header>
      <h1 className='text-gradient'>Você tem {todosLength} {taskOrTasks}.</h1>
    </header>
  )
}
