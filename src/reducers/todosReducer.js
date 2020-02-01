import { ADD_ITEM, DELETE_ITEM, COMPLETE_ITEM, EDIT_ITEM_TITLE } from '../actions/types'

const initialState = []

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        action.payload.todo
      ]
    case DELETE_ITEM:
      return state.filter(item => item.id !== action.payload.id)
    case COMPLETE_ITEM:
      return state.map(item => (
        item.id === action.payload.id ? {...item, status: 'completed'} : item
      ))
    case EDIT_ITEM_TITLE:
      return state.map(item => (
        item.id === action.payload.id ? {...item, title: action.payload.title} : item
      ))
    default:
      return state
  }
}

export default todosReducer
