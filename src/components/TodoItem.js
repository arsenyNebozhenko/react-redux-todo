import React from 'react'

const TodoItem = ({ todo: { id, title, description, status }, completeItem, deleteItem }) => {
  return (
    <li>
      <h2>{title}</h2>
      {description && <h4>{description}</h4>}
      <strong>{status}</strong>
      <div>
        <button onClick={() => completeItem(id)}>&#10004;</button>
        <button onClick={() => deleteItem(id)}>&times;</button>
      </div>
    </li>
  )
}

export default TodoItem
