import React from 'react'
import { getFormattedDate, isValidDate } from '../../utils'

const TodoItem = ({ todo: { id, title, description, importance, dateAdded, dateExpires, status, isHidden }, changeItemStatus, deleteItem, editItemTitle }) => {
  return (
    <li style={{display: isHidden ? 'none' : 'block', color: status === 'failed' ? 'red' : 'black'}}>
      <input type="text" value={title} onChange={(e) => editItemTitle(id, e.target.value)} />
      <div>Added: {getFormattedDate(dateAdded)}</div>
      {isValidDate(dateExpires) && <div>Expires: {getFormattedDate(dateExpires)}</div>}
      {description && <div>{description}</div>}
      {importance && <div>{importance}</div>}
      <strong>{status}</strong>
      <div>
        <button onClick={() => changeItemStatus(id, status === 'active' ? 'completed' : status === 'completed' ? 'active' : 'completed')}>&#10004;</button>
        <button onClick={() => deleteItem(id)}>&times;</button>
      </div>
    </li>
  )
}

export default TodoItem
