import React from 'react'
import './Todo.scss'

import TodoAddForm from '../TodoAddForm/TodoAddForm'
import TodoList from '../TodoList/TodoList'
import TodoFilterForm from '../TodoFilterForm/TodoFilterForm'

const Todo = () => {
  return (
    <div className="todo">
      <TodoAddForm />
      <TodoFilterForm />
      <TodoList />
    </div>
  )
}

export default Todo
