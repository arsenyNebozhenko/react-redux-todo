import React from 'react'

import { 
  getFormattedDate, 
  isValidDate 
} from '../../utils'

const TodoItem = ({ todo: { id, title, description, importance, dateAdded, dateExpires, dateCompleted, status, isHidden }, deleteItem,  setItemProp }) => {
  // const style = {
  //   display: isHidden ? 'none' : 'block',
  //   color: status === 'active' ? 'black' : status === 'completed' ? 'green' : 'red'
  // }
  
  const handleToggleButtonClick = () => {
    if (status === 'completed') {
      setItemProp(id, 'dateCompleted', null)
    } else {
      setItemProp(id, 'dateCompleted', new Date())
    }
    setItemProp(id, 'status', status === 'active' ? 'completed' : status === 'completed' ? 'active' : 'completed')
  }
  
  return (
    <li className="todo-item">
      <button onClick={handleToggleButtonClick}>&#10004;</button>
      <input 
        className="todo-item__input"
        type="text" 
        name="title" 
        value={title} 
        onChange={({ target: { name, value }}) => setItemProp(name, value)} 
      />
      <strong>{status}</strong>
      <ul className="todo-item__dates">
        <li className="todo-item__date">Added: {getFormattedDate(dateAdded)}</li>
        {isValidDate(dateExpires) && <li className="todo-item__date">Expires: {getFormattedDate(dateExpires)}</li>}
        {dateCompleted && <li className="todo-item__date">Completed: {getFormattedDate(dateCompleted)}</li>}
      </ul>
      {description && <div>{description}</div>}
      {importance && <div>{importance}</div>}
      <button onClick={() => deleteItem(id)}>&times;</button>
    </li>
  )
}

export default TodoItem
