// @flow
import React, { Component } from 'react'
import ToDoItem from '../ToDoItem'
import styled from 'styled-components'
import { compose, withProps } from 'recompose'
import { ToDo } from '../../types'

const ToDoListContainer = styled.div`
  width: 80%;
  padding: 3% 3% 3% 8%;
  margin: 1em auto;
`

let ToDoList = ({
  todos,
  handleToDoToggle
}: {
  todos: Array<ToDo>,
  handleToDoToggle: () => mixed
}) => {
  const renderToDo = (todo: ToDo) =>
    <ToDoItem key={todo.id} todo={todo} handleToDoToggle={handleToDoToggle} />
  return (
    <ToDoListContainer>
      {todos.map(renderToDo)}
    </ToDoListContainer>
  )
}

const toDoListEnhancer = compose(
  withProps(({ todos, selectedFilter }) => {
    let visibleToDos = []
    if (selectedFilter == 'all') {
      visibleToDos = todos
    } else {
      visibleToDos = todos.filter(todo => {
        switch (selectedFilter) {
          case 'active':
            return !todo.completed
          case 'completed':
            return todo.completed
        }
      })
    }
    return {
      todos: visibleToDos
    }
  })
)

ToDoList = toDoListEnhancer(ToDoList)

export default ToDoList
