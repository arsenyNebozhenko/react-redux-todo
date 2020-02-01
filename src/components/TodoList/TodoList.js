import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteItem, changeItemStatus, editItemTitle, detectItemsFailure } from '../../actions/todosActions'

import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({ todos, deleteItem, changeItemStatus, editItemTitle, detectItemsFailure }) => {
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
      changeItemStatus={changeItemStatus}
      editItemTitle={editItemTitle}
      detectItemsFailure={detectItemsFailure}
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

export default connect(mapStateToProps, { deleteItem, changeItemStatus, editItemTitle, detectItemsFailure })(TodoList)
