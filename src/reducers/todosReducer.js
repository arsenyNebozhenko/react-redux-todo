import { ADD_ITEM, DELETE_ITEM, DISPLAY_ITEMS_BY_IMPORTANCE, DETECT_ITEMS_FAILURE, SET_ITEM_PROP,  } from '../actions/types'
import { isValidDate } from '../utils'

const initialState = JSON.parse(localStorage.getItem('todos'))

const todosReducer = (state = initialState, action) => {
  const { type } = action
  const { todo, id, key, value } = action.payload ? action.payload : action

  switch (type) {
    case ADD_ITEM:
      return [
        ...state,
        todo
      ]
    case DELETE_ITEM:
      return state.filter(item => item.id !== id)
    case DISPLAY_ITEMS_BY_IMPORTANCE:
      return value === 'all' ? state.map(item => ({...item, isHidden: false})) : state.map(item => item.importance === value ? {...item, isHidden: false} : {...item, isHidden: true})
    case DETECT_ITEMS_FAILURE:
      return state.map(item => item.status === 'active' && isValidDate(item.dateExpires) && new Date(item.dateExpires).getTime() <= new Date(item.dateAdded).getTime() ? {...item, status: 'failed'} : item)
    case SET_ITEM_PROP:
      return state.map(item => item.id === id ? {...item, [key]: value} : item)
    default:
      return state
  }
}

export default todosReducer
