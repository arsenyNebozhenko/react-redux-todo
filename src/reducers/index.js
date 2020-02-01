import { combineReducers } from 'redux'

import todosReducer from './todosReducer'
import todoAddFormReducer from './todoAddFormReducer'
import todoFilterFormReducer from './todoFilterFormReducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  todoAddForm: todoAddFormReducer,
  todoFilterForm: todoFilterFormReducer
})

export default rootReducer
