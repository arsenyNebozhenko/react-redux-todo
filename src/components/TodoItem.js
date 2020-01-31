import React from 'react'

const TodoItem = ({ todo: { id, title, status }, completeItem, deleteItem }) => {
  return (
    <li>
      <h2>{title}</h2>
      <strong>{status}</strong>
      <div>
        <button onClick={() => completeItem(id)}>&#10004;</button>
        <button onClick={() => deleteItem(id)}>&times;</button>
      </div>
    </li>
  )
}

export default TodoItem
