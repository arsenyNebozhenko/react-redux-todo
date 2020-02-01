import React from 'react'
import { getFormattedDate, isValidDate } from '../../utils'

const TodoItem = ({ todo: { id, title, description, importance, dateAdded, dateExpires, dateCompleted, status, isHidden }, deleteItem,  setItemProp }) => {
  const handleToggleButtonClick = () => {
    if (status === 'completed') {
      setItemProp(id, 'dateCompleted', null)
    } else {
      setItemProp(id, 'dateCompleted', new Date())
    }
    setItemProp(id, 'status', status === 'active' ? 'completed' : status === 'completed' ? 'active' : 'completed')
  }
  
  return (
    <li style={{display: isHidden ? 'none' : 'block', color: status === 'active' ? 'black' : status === 'completed' ? 'green' : 'red'}}>
      <input type="text" name="title" value={title} onChange={(e) => setItemProp(id, e.target.name, e.target.value)} />
      <div>Added: {getFormattedDate(dateAdded)}</div>
      {isValidDate(dateExpires) && <div>Expires: {getFormattedDate(dateExpires)}</div>}
      {dateCompleted && <div>Completed: {getFormattedDate(dateCompleted)}</div>}
      {description && <div>{description}</div>}
      {importance && <div>{importance}</div>}
      <strong>{status}</strong>
      <div>
        <button onClick={handleToggleButtonClick}>&#10004;</button>
        <button onClick={() => deleteItem(id)}>&times;</button>
      </div>
    </li>
  )
}

export default TodoItem
