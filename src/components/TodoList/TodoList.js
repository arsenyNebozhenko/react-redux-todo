import React from 'react'
import { connect } from 'react-redux'
import { deleteItem, toggleCompleteItem, editItemTitle } from '../../actions/todosActions'

import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({ todos, deleteItem, toggleCompleteItem, editItemTitle }) => {
  const items = todos.map((todo, index) => (
    <TodoItem 
      key={index} 
      todo={todo}
      deleteItem={deleteItem} 
      toggleCompleteItem={toggleCompleteItem}
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

export default connect(mapStateToProps, { deleteItem, toggleCompleteItem, editItemTitle })(TodoList)
