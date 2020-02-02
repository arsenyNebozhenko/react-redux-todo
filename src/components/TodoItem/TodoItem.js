import React from 'react'
import './TodoItem.scss'

import { 
  getFormattedDate, 
  isValidDate 
} from '../../utils'

const TodoItem = ({ todo: { id, title, description, dateAdded, dateExpires, dateCompleted, status, isHidden }, deleteItem,  setItemProp }) => {
  const extraClassName = isHidden ? ' todo-item--hidden' : status === 'completed' ? ' todo-item--completed' : status === 'failed' ? ' todo-item--failed' : ''
  
  const handleToggleButtonClick = () => {
    if (status === 'completed') {
      setItemProp(id, 'dateCompleted', null)
    } else {
      setItemProp(id, 'dateCompleted', new Date())
    }
    setItemProp(id, 'status', status === 'active' ? 'completed' : status === 'completed' ? 'active' : 'completed')
  }
  
  return (
    <li className={'todo-item' + extraClassName}>
      <button
        className="todo-item__button todo-item__button--toggle" 
        onClick={handleToggleButtonClick}
      >&#10004;</button>
      <div className="todo-item__text">
        <input 
          className="todo-item__title"
          type="text" 
          name="title" 
          value={title} 
          onChange={({ target: { name, value }}) => setItemProp(id, name, value)} 
          />
        {description && 
          <input 
            className="todo-item__description"
            type="text" 
            name="description" 
            value={description} 
            onChange={({ target: { name, value }}) => setItemProp(id, name, value)} 
          />
        }
      </div>
      <ul className="todo-item__dates">
        <li className="todo-item__date">Added: {getFormattedDate(dateAdded)}</li>
        {isValidDate(dateExpires) && <li className="todo-item__date">Expires: {getFormattedDate(dateExpires)}</li>}
        {dateCompleted && <li className="todo-item__date">Completed: {getFormattedDate(dateCompleted)}</li>}
      </ul>
      <button
        className="todo-item__button todo-item__button--delete" 
        onClick={() => deleteItem(id)
      }>&times;</button>
    </li>
  )
}

export default TodoItem
