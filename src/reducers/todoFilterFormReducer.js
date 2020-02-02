import { UPDATE_FILTER_FORM_VALUE } from "../actions/types"

const initialState = {
  value: 'all'
}

const todoFilterFormReducer = (state = initialState, action) => {
  const { type } = action
  const { value } = action.payload ? action.payload : action

  switch (type) {
    case UPDATE_FILTER_FORM_VALUE:
      return {
        ...state,
        value: value
      }
    default:
      return state
  }
}

export default todoFilterFormReducer
