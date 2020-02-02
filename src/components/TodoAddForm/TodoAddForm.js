import React from 'react'
import { connect } from 'react-redux'
import './TodoAddForm.scss'

import TodoAddToggleExtendButton from '../TodoAddToggleExtendButton/TodoAddToggleExtendButton'
import TodoAddInput from '../TodoAddInput/TodoAddInput'

import { 
  updateFormValue, 
  toggleExtendForm 
} from '../../actions/todoAddFormActions'
import { 
  addItem, 
  displayItemsByImportance 
} from '../../actions/todosActions'
import { 
  updateFilterFormValue 
} from '../../actions/todoFilterFormActions'


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
    <form className="todo-add-form" autocomplete="off" onSubmit={handleSubmit}>
      <TodoAddToggleExtendButton isExtended={isExtended} toggleExtendForm={toggleExtendForm} />
      <TodoAddInput name="title" value={title} updateFormValue={updateFormValue} />
      {isExtended && <TodoAddInput name="description" value={description} updateFormValue={updateFormValue} />}
      {isExtended && <TodoAddInput name="importance" updateFormValue={updateFormValue} />}
      {isExtended && <TodoAddInput name="dateExpires" value={dateExpires} updateFormValue={updateFormValue} />}
      <button className="todo-add-form__button">+</button>
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

const actions = {
  updateFormValue,
  updateFilterFormValue,
  displayItemsByImportance,
  toggleExtendForm,
  addItem
}

export default connect(mapStateToProps, actions)(TodoAddForm)
