import React from 'react'
import { connect } from 'react-redux'

import TodoItem from './TodoItem'

const TodoList = ({ todos }) => {
  const items = todos.map((todo, index) => <TodoItem key={index} todo={todo} />)

  return (
    <ul>
      {items}
    </ul>
  )
}

const mapStateToProps = ({ todos }) => ({
  todos
})

export default connect(mapStateToProps)(TodoList)
