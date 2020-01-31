import { UPDATE_TITLE } from "../actions/types"

const initialState = {
  title: ''
}

const todoFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload.title
      }
    default:
      return state
  }
}

export default todoFormReducer
