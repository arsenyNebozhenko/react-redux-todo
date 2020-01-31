import React from 'react'
import { connect } from 'react-redux'

import { updateTitle, addItem } from '../actions'

const TodoForm = ({ title, updateTitle, addItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    addItem({
      id: Math.random(),
      title,
      status: 'active'
    })

    updateTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => updateTitle(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}

const mapStateToProps = ({ todoForm: { title } }) => ({
  title
})

const mapDispatchToProps = (dispatch) => ({
  updateTitle: (value) => dispatch(updateTitle(value)),
  addItem: (id, title, status) => dispatch(addItem(id, title, status))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
