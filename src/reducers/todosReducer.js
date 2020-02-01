import { ADD_ITEM, DELETE_ITEM, CHANGE_ITEM_STATUS, EDIT_ITEM_TITLE, DISPLAY_ITEMS_BY_IMPORTANCE } from '../actions/types'

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
    case CHANGE_ITEM_STATUS:
      return state.map(item => item.id === action.payload.id ? {...item, status: action.payload.status} : item)
    case EDIT_ITEM_TITLE:
      return state.map(item => (
        item.id === action.payload.id ? {...item, title: action.payload.title} : item
      ))
    case DISPLAY_ITEMS_BY_IMPORTANCE:
      if (action.payload.value === 'all') {
        return state.map(item => ({...item, isHidden: false}))
      } else {
        return state.map(item => item.importance === action.payload.value ? {...item, isHidden: false} : {...item, isHidden: true})
      }
    default:
      return state
  }
}

export default todosReducer
