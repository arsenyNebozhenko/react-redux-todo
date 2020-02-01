import React, { useEffect } from 'react'
import { connect } from 'react-redux'

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
    }, 5000)
    return () => clearInterval(interval)
  }, [detectItemsFailure])

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
    <ul>
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
