import React from 'react'
import { connect } from 'react-redux'
import { deleteItem, completeItem, editItemTitle } from '../../actions'

import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({ todos, deleteItem, completeItem, editItemTitle }) => {
  const items = todos.map((todo, index) => (
    <TodoItem 
      key={index} 
      todo={todo}
      deleteItem={deleteItem} 
      completeItem={completeItem}
      editItemTitle={editItemTitle}
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

export default connect(mapStateToProps, { deleteItem, completeItem, editItemTitle })(TodoList)
