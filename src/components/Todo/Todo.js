import React from 'react'

import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'
import TodoFilterForm from '../TodoFilterForm/TodoFilterForm'

const Todo = () => {
  return (
    <div>
      <TodoForm />
      <TodoFilterForm />
      <TodoList />
    </div>
  )
}

export default Todo
