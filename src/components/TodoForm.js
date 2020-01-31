import React from 'react'
import { connect } from 'react-redux'

import { updateFormValue, addItem, toggleExtendForm } from '../actions'

const TodoForm = ({ title, description, importance, updateFormValue, isExtended, toggleExtendForm, addItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    addItem({
      id: Math.random(),
      title,
      description,
      importance,
      dateAdded: new Date(),
      status: 'active'
    })

    updateFormValue('title', '')
    updateFormValue('description', '')
    updateFormValue('importance', '')
  }

  const titleInput = (
    <input
      type="text"
      name="title"
      placeholder="Title"
      value={title}
      onChange={(e) => updateFormValue(e.target.name, e.target.value)}
    />
  )

  const descriptionInput = (
    <input 
      type="text" 
      name="description"
      placeholder="Description"
      value={description} 
      onChange={(e) => updateFormValue(e.target.name, e.target.value)} 
    />
  )

  const selectInput = (
    <select 
      name="importance"
      value={importance} 
      onChange={(e) => updateFormValue(e.target.name, e.target.value)}
    >
      <option value=""></option>
      <option value="important">important</option>
      <option value="less important">less important</option>
      <option value="not important">not important</option>
    </select>
  )

  return (
    <form onSubmit={handleSubmit}>
      {titleInput}
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
  updateFormValue: (name, value) => dispatch(updateFormValue(name, value)),
  toggleExtendForm: () => dispatch(toggleExtendForm()),
  addItem: (id, title, status) => dispatch(addItem(id, title, status))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
