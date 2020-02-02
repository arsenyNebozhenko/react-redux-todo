import { UPDATE_FILTER_FORM_VALUE } from "../actions/types"

const initialState = {
  value: 'all'
}

const todoFilterFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTER_FORM_VALUE:
      return {
        ...state,
        value: action.payload.value
      }
    default:
      return state
  }
}

export default todoFilterFormReducer
