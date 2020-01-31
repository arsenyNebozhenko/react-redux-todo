import React from 'react'
import { connect } from 'react-redux'

import { updateState, addItem } from '../actions'

const TodoForm = ({ title, updateState, addItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    addItem({
      id: Math.random(),
      title,
      status: 'active'
    })

    updateState('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => updateState(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}

const mapStateToProps = ({ todoForm: { title } }) => ({
  title
})

const mapDispatchToProps = (dispatch) => ({
  updateState: (value) => dispatch(updateState(value)),
  addItem: (id, title, status) => dispatch(addItem(id, title, status))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
