import React from 'react'

const TitleInput = ({ title, updateFormValue }) => {
  return (
    <input
      type="text"
      name="title"
      placeholder="Title"
      value={title}
      onChange={(e) => updateFormValue(e.target.name, e.target.value)}
    />
  )
}

export default TitleInput
