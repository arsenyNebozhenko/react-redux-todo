import React from 'react'

const DescriptionInput = ({ description, updateFormValue }) => {
  return (
    <input 
      type="text" 
      name="description"
      placeholder="Description"
      value={description} 
      onChange={(e) => updateFormValue(e.target.name, e.target.value)} 
    />
  )
}

export default DescriptionInput
