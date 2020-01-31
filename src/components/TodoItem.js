import React from 'react'

const TodoItem = ({ todo: { id, title, description, importance, status }, completeItem, deleteItem }) => {
  console.log(importance)
  return (
    <li>
      <h2>{title}</h2>
      {description && <h4>{description}</h4>}
      {importance && <div>{importance}</div>}
      <strong>{status}</strong>
      <div>
        <button onClick={() => completeItem(id)}>&#10004;</button>
        <button onClick={() => deleteItem(id)}>&times;</button>
      </div>
    </li>
  )
}

export default TodoItem
