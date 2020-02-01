import React from 'react'

const TodoAddToggleExtendButton = ({ isExtended, toggleExtendForm }) => {
  return (
    <button 
      type="button"
      onClick={toggleExtendForm}
    >{isExtended ? 'Shrink' : 'Extend'}</button>
  )
}

export default TodoAddToggleExtendButton
