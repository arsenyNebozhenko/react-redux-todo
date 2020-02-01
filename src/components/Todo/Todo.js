import React from 'react'

import TodoAddForm from '../TodoAddForm/TodoAddForm'
import TodoList from '../TodoList/TodoList'
import TodoFilterForm from '../TodoFilterForm/TodoFilterForm'

const Todo = () => {
  return (
    <div>
      <TodoAddForm />
      <TodoFilterForm />
      <TodoList />
    </div>
  )
}

export default Todo
