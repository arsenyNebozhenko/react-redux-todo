import { ADD_ITEM, DELETE_ITEM, COMPLETE_ITEM } from '../actions/types'

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
    default:
      return state
  }
}

export default todosReducer
