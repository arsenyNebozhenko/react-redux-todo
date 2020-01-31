import React from 'react'
import { connect } from 'react-redux'

import TodoItem from './TodoItem'

const TodoList = ({ todos }) => {
  return (
    <ul>
      <TodoItem />
    </ul>
  )
}

const mapStateToProps = ({ todos }) => ({
  todos
})

export default connect(mapStateToProps)(TodoList)
