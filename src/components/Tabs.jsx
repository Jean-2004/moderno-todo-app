import React from 'react'

export default function Tabs(props) {
  const { todos, selectedTab, setSelectedTab } = props

  const tabs = ['Todos', 'Ativos', 'Completados']

  return (
    <nav className='tab-container'>
      {tabs.map((tab, tabIndex) => {
        const numOfTasks = tab === 'Todos' ?
          todos.length :
          tab === 'Ativos' ?
            todos.filter(val => !val.complete).length :
            todos.filter(val => val.complete).length

        return (
          <button className={'tab-button ' + (tab === selectedTab ? ' tab-selected' : ' ')} 
          onClick={() => {
            setSelectedTab(tab)
          }}
          key={tabIndex}>
            <h4>{tab} <span>({numOfTasks})</span></h4>
          </button>
        )
      })}
      <hr />
    </nav>
  )
}
