import { UPDATE_FORM_VALUE, TOGGLE_EXTEND_FORM } from "../actions/types"

const initialState = {
  title: '',
  description: '',
  importance: 'important',
  dateAdded: '',
  dateExpires: '',
  isExtended: false
}

const TodoAddFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_VALUE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
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

export default TodoAddFormReducer
