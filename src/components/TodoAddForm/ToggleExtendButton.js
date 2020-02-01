import React from 'react'

const ToggleExtendButton = ({ isExtended, toggleExtendForm }) => {
  return (
    <button 
      type="button"
      onClick={toggleExtendForm}
    >{isExtended ? 'Shrink' : 'Extend'}</button>
  )
}

export default ToggleExtendButton
