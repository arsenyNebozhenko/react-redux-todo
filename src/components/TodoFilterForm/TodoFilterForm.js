import React from 'react'
import { connect } from 'react-redux'

import { 
  displayItemsByImportance 
} from '../../actions/todosActions'
import { 
  updateFilterFormValue 
} from '../../actions/todoFilterFormActions'

const TodoFilterForm = ({ value, updateFilterFormValue, displayItemsByImportance }) => {
  const handleChange = ({ target: { value}}) => {
    updateFilterFormValue(value)
    displayItemsByImportance(value)
  }

  return (
    <form>
      <strong>Show</strong>
      <select value={value} onChange={handleChange}>
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
