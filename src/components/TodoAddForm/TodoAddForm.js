import React from 'react'
import { connect } from 'react-redux'

import { updateFormValue, toggleExtendForm } from '../../actions/todoAddFormActions'
import { addItem, displayItemsByImportance } from '../../actions/todosActions'
import { updateFilterFormValue } from '../../actions/todoFilterFormActions'
import ToggleExtendButton from './ToggleExtendButton'
import TodoAddInput from '../TodoAddInput/TodoAddInput'

const TodoAddForm = ({ title, description, importance, dateExpires, updateFormValue, updateFilterFormValue, displayItemsByImportance, isExtended, toggleExtendForm, addItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    addItem({
      id: Math.random(),
      title,
      description,
      importance,
      dateAdded: new Date(),
      dateExpires: new Date(Date.parse(dateExpires)),
      status: 'active',
      isHidden: false
    })

    updateFormValue('title', '')
    updateFormValue('description', '')
    updateFormValue('dateExpires', '')

    updateFilterFormValue('all')
    displayItemsByImportance('all')
  }

  return (
    <form onSubmit={handleSubmit}>
      <ToggleExtendButton isExtended={isExtended} toggleExtendForm={toggleExtendForm} />
      <TodoAddInput name="title" value={title} updateFormValue={updateFormValue} />
      {isExtended && <TodoAddInput name="description" value={description} updateFormValue={updateFormValue} />}
      {isExtended && <TodoAddInput name="importance" updateFormValue={updateFormValue} />}
      {isExtended && <TodoAddInput name="dateExpires" value={dateExpires} updateFormValue={updateFormValue} />}
      <button>Add</button>
    </form>
  )
}

const mapStateToProps = ({ todoAddForm: { title, description, importance, dateExpires, isExtended } }) => ({
  title,
  description,
  importance,
  dateExpires,
  isExtended
})

export default connect(mapStateToProps, { updateFormValue, updateFilterFormValue, displayItemsByImportance, toggleExtendForm, addItem })(TodoAddForm)
