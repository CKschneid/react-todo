// @flow
import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  CHANGE_NEW_TODO_TEXT
} from '../Actions'

const defaultTodos = [
  { id: 'RHIXExeMuv', text: 'read book', completed: true },
  { id: 'ZALfow8VHC', text: 'go to store', completed: false },
  { id: 'h1iFfVGwvk', text: 'exercise', completed: false }
]

const toDos = (state = defaultTodos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id == action.id) {
          return { ...todo, completed: !todo.completed }
        } else {
          return todo
        }
      })
    default:
      return state
  }
}

const toDoText = (state = '', action) => {
  switch (action.type) {
    case CHANGE_NEW_TODO_TEXT:
      return action.text
    default:
      return state
  }
}

const visibilityFilter = (state = 'all', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const toDoAppReducer = combineReducers({
  toDos,
  visibilityFilter,
  toDoText
})

export default toDoAppReducer
