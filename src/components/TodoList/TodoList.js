import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './TodoList.scss'

import TodoItem from '../TodoItem/TodoItem'

import {
  deleteItem,
  detectItemsFailure,
  setItemProp
} from '../../actions/todosActions'

const TodoList = ({ todos, deleteItem, detectItemsFailure, setItemProp }) => {
  useEffect(() => {
    detectItemsFailure()
    const interval = setInterval(() => {
      detectItemsFailure()
    }, 1500)
    return () => clearInterval(interval)
  }, [detectItemsFailure])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const items = todos.map((todo, index) => (
    <TodoItem 
      key={index} 
      todo={todo}
      deleteItem={deleteItem} 
      detectItemsFailure={detectItemsFailure}
      setItemProp={setItemProp}
    />
  ))

  return (
    <ul className="todo-list">
      {items}
    </ul>
  )
}

const mapStateToProps = ({ todos }) => ({
  todos
})

const actions = {
  deleteItem,
  detectItemsFailure,
  setItemProp
}

export default connect(mapStateToProps, actions)(TodoList)
