import React from 'react'

const TodoItem = ({ todo: { id, title, status }, deleteItem }) => {
  return (
    <li>
      <h2>{title}</h2>
      <strong>{status}</strong>
      <div>
        <button onClick={() => deleteItem(id)}>&times;</button>
      </div>
    </li>
  )
}

export default TodoItem
