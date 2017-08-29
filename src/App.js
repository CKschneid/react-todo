// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import { compose, withStateHandlers } from 'recompose'
import randomId from 'random-id'
import NewToDo from './Components/NewToDo'
import FilterSelection from './Components/FilterSelection'
import ToDoList from './Components/ToDoList'

const ToDoAppContainer = styled.div`
  width: 50%;
  margin: 20px auto;
`

const ToDoApp = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`

const appEnhancer = compose(
  withStateHandlers(
    {
      todos: [
        { id: 'RHIXExeMuv', text: 'read book', completed: true },
        { id: 'ZALfow8VHC', text: 'go to store', completed: false },
        { id: 'h1iFfVGwvk', text: 'exercise', completed: false }
      ],
      filter: 'all',
      fieldValue: ''
    },
    {
      handleFieldChange: state => fieldValue => ({
        ...state,
        fieldValue
      }),
      handleSubmitNew: state => () => {
        const newToDo = {
          id: randomId(10),
          text: state.fieldValue,
          completed: false
        }
        return {
          ...state,
          todos: [...state.todos, newToDo],
          fieldValue: ''
        }
      },
      handleFilterChange: state => filter => ({
        ...state,
        filter
      }),
      handleToDoToggle: state => id => ({
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id == id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          } else {
            return todo
          }
        })
      })
    }
  )
)

let App = ({
  todos,
  filter,
  fieldValue,
  handleFieldChange,
  handleSubmitNew,
  handleFilterChange,
  handleToDoToggle
}) =>
  <ToDoAppContainer>
    <ToDoApp>
      <NewToDo
        fieldValue={fieldValue}
        handleFieldChange={handleFieldChange}
        handleSubmitNew={handleSubmitNew}
      />
      <FilterSelection
        selectedFilter={filter}
        handleFilterChange={handleFilterChange}
      />
      <ToDoList
        todos={todos}
        selectedFilter={filter}
        handleToDoToggle={handleToDoToggle}
      />
    </ToDoApp>
  </ToDoAppContainer>

App = appEnhancer(App)

export default App
