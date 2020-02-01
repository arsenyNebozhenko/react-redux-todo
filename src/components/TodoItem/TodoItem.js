import React from 'react'
import { getFormattedDate } from '../../utils'

const TodoItem = ({ todo: { id, title, description, importance, dateAdded, dateExpires, status, isHidden }, completeItem, deleteItem, editItemTitle }) => {
  return (
    <li style={{display: isHidden ? 'none' : 'block'}}>
      <input type="text" value={title} onChange={(e) => editItemTitle(id, e.target.value)} />
      <div>Added: {getFormattedDate(dateAdded)}</div>
      {'' + dateExpires !== 'Invalid Date' && <div>Expires: {getFormattedDate(dateExpires)}</div>}
      {description && <div>{description}</div>}
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
