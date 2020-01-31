import React from 'react'
import { connect } from 'react-redux'

import { updateTitle, addItem, toggleExtendForm, updateDescription, updateImportance } from '../actions'

const TodoForm = ({ title, description, importance, isExtended, toggleExtendForm, updateTitle, updateDescription, updateImportance, addItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    addItem({
      id: Math.random(),
      title,
      description,
      importance,
      status: 'active'
    })

    updateTitle('')
    updateDescription('')
  }

  const descriptionInput = (
    <input 
      type="text" 
      placeholder="Description"
      value={description} 
      onChange={(e) => updateDescription(e.target.value)} 
    />
  )

  const selectInput = (
    <select value={importance} onChange={(e) => updateImportance(e.target.value)}>
      <option value=""></option>
      <option value="important">important</option>
      <option value="less important">less important</option>
      <option value="not important">not important</option>
    </select>
  )

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => updateTitle(e.target.value)}
      />
      {isExtended && descriptionInput}
      {isExtended && selectInput}
      <button>Add</button>
      <button 
        type="button"
        onClick={toggleExtendForm}
      >{isExtended ? 'Shrink' : 'Extend'}</button>
    </form>
  )
}

const mapStateToProps = ({ todoForm: { title, description, importance, isExtended } }) => ({
  title,
  description,
  importance,
  isExtended
})

const mapDispatchToProps = (dispatch) => ({
  updateTitle: (value) => dispatch(updateTitle(value)),
  updateDescription: (value) => dispatch(updateDescription(value)),
  updateImportance: (value) => dispatch(updateImportance(value)),
  toggleExtendForm: () => dispatch(toggleExtendForm()),
  addItem: (id, title, status) => dispatch(addItem(id, title, status))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
