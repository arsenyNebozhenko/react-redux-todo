import React from 'react'
import { connect } from 'react-redux'

import { updateFormValue, addItem, toggleExtendForm } from '../../actions'
import TitleInput from './TitleInput'
import DescriptionInput from './DescriptionInput'
import ImportanceInput from './ImportanceInput'
import DateExpiresInput from './DateExpiresInput'
import ToggleExtendButton from './ToggleExtendButton'

const TodoForm = ({ title, description, importance, dateExpires, updateFormValue, isExtended, toggleExtendForm, addItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    addItem({
      id: Math.random(),
      title,
      description,
      importance,
      dateAdded: new Date(),
      dateExpires: new Date(Date.parse(dateExpires)),
      status: 'active'
    })

    updateFormValue('title', '')
    updateFormValue('description', '')
    updateFormValue('importance', '')
    updateFormValue('dateExpires', '')
  }

  return (
    <form onSubmit={handleSubmit}>
      <ToggleExtendButton isExtended={isExtended} toggleExtendForm={toggleExtendForm} />
      <TitleInput title={title} updateFormValue={updateFormValue} />
      {isExtended && <DescriptionInput description={description} updateFormValue={updateFormValue} />}
      {isExtended && <ImportanceInput importance={importance} updateFormValue={updateFormValue} />}
      {isExtended && <DateExpiresInput dateExpires={dateExpires} updateFormValue={updateFormValue} />}
      <button>Add</button>
    </form>
  )
}

const mapStateToProps = ({ todoForm: { title, description, importance, dateExpires, isExtended } }) => ({
  title,
  description,
  importance,
  dateExpires,
  isExtended
})

const mapDispatchToProps = (dispatch) => ({
  updateFormValue: (name, value) => dispatch(updateFormValue(name, value)),
  toggleExtendForm: () => dispatch(toggleExtendForm()),
  addItem: (id, title, status) => dispatch(addItem(id, title, status))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
