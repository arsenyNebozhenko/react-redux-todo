import { UPDATE_TITLE, TOGGLE_EXTEND_FORM, UPDATE_DESCRIPTION, UPDATE_IMPORTANCE } from "../actions/types"

const initialState = {
  title: '',
  description: '',
  imporance: null,
  isExtended: false
}

const todoFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload.title
      }
    case UPDATE_DESCRIPTION:
      return {
        ...state,
        description: action.payload.description
      }
    case UPDATE_IMPORTANCE:
      return {
        ...state,
        importance: action.payload.importance
      }
    case TOGGLE_EXTEND_FORM:
      return {
        ...state,
        isExtended: !state.isExtended 
      }
    default:
      return state
  }
}

export default todoFormReducer
