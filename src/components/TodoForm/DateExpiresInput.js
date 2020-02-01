import React from 'react'

const DateExpiresInput = ({ dateExpires, updateFormValue }) => {
  return (
    <input 
      type="datetime-local"
      name="dateExpires"
      value={dateExpires}
      onChange={(e) => updateFormValue(e.target.name, e.target.value)}
    />
  )
}

export default DateExpiresInput
