import React from 'react'

const ImportanceInput = ({ importance, updateFormValue }) => {
  return (
    <select 
      name="importance"
      value={importance}
      onChange={(e) => updateFormValue(e.target.name, e.target.value)}
    >
      <option value="important">important</option>
      <option value="regular">regular</option>
      <option value="not important">not important</option>
    </select>
  )
}

export default ImportanceInput
