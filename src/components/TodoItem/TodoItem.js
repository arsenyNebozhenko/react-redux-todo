import React from 'react'
import './TodoItem.scss'

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
      <button
        className="todo-item__button todo-item__button--toggle" 
        onClick={handleToggleButtonClick}
      >&#10004;</button>
      <input 
        className="todo-item__title"
        type="text" 
        name="title" 
        value={title} 
        onChange={({ target: { name, value }}) => setItemProp(name, value)} 
      />
      {description && <div className="todo-item__description">{description}</div>}
      <strong className="todo-item__status">{status}</strong>
      <ul className="todo-item__dates">
        <li className="todo-item__date">Added: {getFormattedDate(dateAdded)}</li>
        {isValidDate(dateExpires) && <li className="todo-item__date">Expires: {getFormattedDate(dateExpires)}</li>}
        {dateCompleted && <li className="todo-item__date">Completed: {getFormattedDate(dateCompleted)}</li>}
      </ul>
      {importance && <div className="todo-item__importance">{importance}</div>}
      <button
        className="todo-item__button todo-item__button--delete" 
        onClick={() => deleteItem(id)
      }>&times;</button>
    </li>
  )
}

export default TodoItem
