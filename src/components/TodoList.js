import React from 'react'
import { connect } from 'react-redux'
import { deleteItem, completeItem } from '../actions'

import TodoItem from './TodoItem'

const TodoList = ({ todos, deleteItem, completeItem }) => {
  const items = todos.map((todo, index) => (
    <TodoItem 
      key={index} 
      todo={todo}
      deleteItem={deleteItem} 
      completeItem={completeItem}
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
  deleteItem: (id) => dispatch(deleteItem(id)),
  completeItem: (id) => dispatch(completeItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
