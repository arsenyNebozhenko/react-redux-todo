import React from 'react'
import { connect } from 'react-redux'

import { updateState } from '../actions'

const TodoForm = ({ title, updateState }) => {
  return (
    <form>
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
  updateState: (value) => dispatch(updateState(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
