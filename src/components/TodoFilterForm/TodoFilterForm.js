import React from 'react'
import { connect } from 'react-redux'
import { hideItemsByValue } from '../../actions/todosActions'

const TodoFilterForm = ({ hideItemsByValue }) => {
  return (
    <form>
      <strong>Show</strong>
      <select onChange={(e) => hideItemsByValue(e.target.value)}>
        <option value="all">all</option>
        <option value="important">important</option>
        <option value="regular">regular</option>
        <option value="not important">not important</option>
      </select>
    </form>
  )
}

export default connect(null, { hideItemsByValue })(TodoFilterForm)
