import React from 'react'

const TodoAddInput = ({ name, value, updateFormValue }) => {
  switch (name) {
    case 'importance':
      return (
        <select 
          name={name}
          onChange={(e) => updateFormValue(e.target.name, e.target.value)}
        >
          <option value="important">important</option>
          <option value="regular">regular</option>
          <option value="not important">not important</option>
        </select>
      )
    default:
      return (   
        <input 
          type={name === 'dateExpires' ? 'datetime-local' : 'text'}
          placeholder={name}
          name={name}
          value={value}
          onChange={(e) => updateFormValue(e.target.name, e.target.value)}
        />
    )
  }
}

export default TodoAddInput
