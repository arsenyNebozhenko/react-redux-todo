import React from 'react'
import { connect } from 'react-redux'
import { deleteItem } from '../actions'

import TodoItem from './TodoItem'

const TodoList = ({ todos, deleteItem }) => {
  const items = todos.map((todo, index) => (
    <TodoItem 
      key={index} 
      todo={todo}
      deleteItem={deleteItem} 
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

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(deleteItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
