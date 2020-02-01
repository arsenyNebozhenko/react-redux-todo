import React from 'react'
import { connect } from 'react-redux'
import { deleteItem, changeItemStatus, editItemTitle } from '../../actions/todosActions'

import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({ todos, deleteItem, changeItemStatus, editItemTitle }) => {
  const items = todos.map((todo, index) => (
    <TodoItem 
      key={index} 
      todo={todo}
      deleteItem={deleteItem} 
      changeItemStatus={changeItemStatus}
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

export default connect(mapStateToProps, { deleteItem, changeItemStatus, editItemTitle })(TodoList)
