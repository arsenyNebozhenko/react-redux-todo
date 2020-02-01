import React from 'react'
import { connect } from 'react-redux'

import { updateFormValue, toggleExtendForm } from '../../actions/todoAddFormActions'
import { addItem, displayItemsByImportance } from '../../actions/todosActions'
import { updateFilterFormValue } from '../../actions/todoFilterFormActions'
import ImportanceInput from './ImportanceInput'
import DateExpiresInput from './DateExpiresInput'
import ToggleExtendButton from './ToggleExtendButton'
import TodoAddInputText from '../TodoAddInputText/TodoAddInputText'

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
      <TodoAddInputText name={'title'} value={title} updateFormValue={updateFormValue} />
      {isExtended && <TodoAddInputText name={'description'} value={description} updateFormValue={updateFormValue} />}
      {isExtended && <ImportanceInput importance={importance} updateFormValue={updateFormValue} />}
      {isExtended && <DateExpiresInput dateExpires={dateExpires} updateFormValue={updateFormValue} />}
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
