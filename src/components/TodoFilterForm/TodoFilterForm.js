import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './TodoFilterForm.scss'

import { 
  displayItemsByImportance 
} from '../../actions/todosActions'
import { 
  updateFilterFormValue 
} from '../../actions/todoFilterFormActions'

const TodoFilterForm = ({ value, updateFilterFormValue, displayItemsByImportance }) => {
  useEffect(() => {
    displayItemsByImportance(value)
  }, [displayItemsByImportance, value])

  const handleChange = ({ target: { value}}) => {
    updateFilterFormValue(value)
    displayItemsByImportance(value)
  }

  return (
    <form className="todo-filter-form">
      <h4 className="todo-filter-form__title">Show</h4>
      <select
        className="todo-filter-form__select" 
        value={value} 
        onChange={handleChange}
      >
        <option value="all">all</option>
        <option value="important">important</option>
        <option value="regular">regular</option>
        <option value="not important">not important</option>
      </select>
    </form>
  )
}

const mapStateToProps = ({ todoFilterForm: { value } }) => ({
  value
})

const actions = {
  displayItemsByImportance,
  updateFilterFormValue
}

export default connect(mapStateToProps, actions)(TodoFilterForm)
