import React from 'react'
import './TodoAddToggleExtendButton.scss'

import { ReactComponent as Gear } from '../../assets/gear.svg'

const TodoAddToggleExtendButton = ({ toggleExtendForm }) => {
  return (
    <button 
      className="todo-add-toggle-extend-button"
      type="button"
      onClick={toggleExtendForm}
    ><Gear /></button>
  )
}

export default TodoAddToggleExtendButton
