import React from 'react'

const TodoAddInputText = ({ name, value, updateFormValue }) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={name}
      value={value}
      onChange={(e) => updateFormValue(e.target.name, e.target.value)}
    />
  )
}

export default TodoAddInputText
