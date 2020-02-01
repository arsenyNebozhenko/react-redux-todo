import React from 'react'
import { connect } from 'react-redux'
import { hideItemsByValue } from '../../actions/todosActions'
import { updateFilterFormValue } from '../../actions/todoFilterFormActions'

const TodoFilterForm = ({ value, updateFilterFormValue, hideItemsByValue }) => {
  const handleChange = ({ target: { value}}) => {
    updateFilterFormValue(value)
    hideItemsByValue(value)
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

export default connect(mapStateToProps, { hideItemsByValue, updateFilterFormValue })(TodoFilterForm)
