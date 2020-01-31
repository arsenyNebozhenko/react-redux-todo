import React from 'react'

const TodoItem = ({ todo: { id, title, status } }) => {
  return (
    <li>
      <h2>{title}</h2>
      <strong>{status}</strong>
    </li>
  )
}

export default TodoItem
