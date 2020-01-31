import React from 'react'
import { getFormattedDate } from '../utils'

const TodoItem = ({ todo: { id, title, description, importance, dateAdded, dateExpires, status }, completeItem, deleteItem }) => {
  return (
    <li>
      <h2>{title}</h2>
      <div>Added: {getFormattedDate(dateAdded)}</div>
      {'' + dateExpires !== 'Invalid Date' && <div>Expires: {getFormattedDate(dateExpires)}</div>}
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
