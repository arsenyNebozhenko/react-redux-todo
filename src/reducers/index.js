import { combineReducers } from 'redux'

import todosReducer from './todosReducer'
import todoFormReducer from './todoFormReducer'
import todoFilterFormReducer from './todoFilterFormReducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  todoForm: todoFormReducer,
  todoFilterForm: todoFilterFormReducer
})

export default rootReducer
