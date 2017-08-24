// @flow
import randomId from 'random-id'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const CHANGE_NEW_TODO_TEXT = 'CHANGE_NEW_TODO_TEXT'

export const addToDo = (text: string) => ({
  type: ADD_TODO,
  id: randomId(10),
  text
})

export const toggleToDo = (id: string) => ({
  type: TOGGLE_TODO,
  id
})

export const setVisibilityFilter = (
  filter: 'all' | 'active' | 'completed'
) => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

export const changeToDoText = (text: string) => ({
  type: CHANGE_NEW_TODO_TEXT,
  text
})
