import { ADD_ITEM, DELETE_ITEM, DISPLAY_ITEMS_BY_IMPORTANCE, DETECT_ITEMS_FAILURE, SET_ITEM_PROP,  } from '../actions/types'
import { isValidDate } from '../utils'

const initialState = JSON.parse(localStorage.getItem('todos'))

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        action.payload.todo
      ]
    case DELETE_ITEM:
      return state.filter(item => item.id !== action.payload.id)
    case DISPLAY_ITEMS_BY_IMPORTANCE:
      return action.payload.value === 'all' ? state.map(item => ({...item, isHidden: false})) : state.map(item => item.importance === action.payload.value ? {...item, isHidden: false} : {...item, isHidden: true})
    case DETECT_ITEMS_FAILURE:
      return state.map(item => item.status === 'active' && isValidDate(item.dateExpires) && new Date(item.dateExpires).getTime() <= new Date(item.dateAdded).getTime() ? {...item, status: 'failed'} : item)
    case SET_ITEM_PROP:
      return state.map(item => item.id === action.payload.id ? {...item, [action.payload.key]: action.payload.value} : item)
    default:
      return state
  }
}

export default todosReducer
