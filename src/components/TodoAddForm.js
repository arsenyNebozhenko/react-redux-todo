import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import TodoAddToggleExtendButton from './TodoAddToggleExtendButton'
import TodoAddInput from './TodoAddInput'
import Button from './Button'

import { 
  updateFormValue, 
  toggleExtendForm 
} from '../actions/todoAddFormActions'
import { 
  addItem, 
  displayItemsByImportance 
} from '../actions/todosActions'
import { 
  updateFilterFormValue 
} from '../actions/todoFilterFormActions'

const Container = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: .5rem;
`

const TodoAddForm = ({ 
    title, 
    description, 
    importance, 
    dateExpires, 
    updateFormValue, 
    updateFilterFormValue, 
    displayItemsByImportance, 
    isExtended, 
    toggleExtendForm, 
    addItem 
  }) => {

  const handleSubmit = (e) => {
    e.preventDefault()

    const item = {
      id: Math.random(),
      title,
      description,
      importance,
      dateAdded: new Date(),
      dateExpires: new Date(Date.parse(dateExpires)),
      status: 'active',
      isHidden: false
    }

    addItem(item)

    updateFormValue('title', '')
    updateFormValue('description', '')
    updateFormValue('dateExpires', '')

    updateFilterFormValue('all')
    displayItemsByImportance('all')
  }

  return (
    <Container autoComplete="off" onSubmit={handleSubmit}>
      <TodoAddToggleExtendButton isExtended={isExtended} toggleExtendForm={toggleExtendForm} />
      <TodoAddInput name="title" value={title} updateFormValue={updateFormValue} />
      {isExtended && <TodoAddInput name="description" value={description} updateFormValue={updateFormValue} />}
      {isExtended && <TodoAddInput name="importance" updateFormValue={updateFormValue} />}
      {isExtended && <TodoAddInput name="dateExpires" value={dateExpires} updateFormValue={updateFormValue} />}
      <Button>+</Button>
    </Container>
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
