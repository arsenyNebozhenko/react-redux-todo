import React from 'react'
import { connect } from 'react-redux'

import { updateTitle, addItem, toggleExtendForm, updateDescription } from '../actions'

const TodoForm = ({ title, description, isExtended, toggleExtendForm, updateTitle, updateDescription, addItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    addItem({
      id: Math.random(),
      title,
      description,
      status: 'active'
    })

    updateTitle('')
    updateDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => updateTitle(e.target.value)}
      />
      {
        isExtended && 
        <input 
          type="text" 
          value={description} 
          onChange={(e) => updateDescription(e.target.value)} />
      }
      <button>Add</button>
      <button 
        type="button"
        onClick={toggleExtendForm}
      >{isExtended ? 'Shrink' : 'Extend'}</button>
    </form>
  )
}

const mapStateToProps = ({ todoForm: { title, description, isExtended } }) => ({
  title,
  description,
  isExtended
})

const mapDispatchToProps = (dispatch) => ({
  updateTitle: (value) => dispatch(updateTitle(value)),
  updateDescription: (value) => dispatch(updateDescription(value)),
  toggleExtendForm: () => dispatch(toggleExtendForm()),
  addItem: (id, title, status) => dispatch(addItem(id, title, status))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
