import { combineReducers } from 'redux'

import todosReducer from './todosReducer'
import todoFormReducer from './todoFormReducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  todoForm: todoFormReducer
})

export default rootReducer
