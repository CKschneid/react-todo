// @flow
import React, { Component } from 'react'
import ToDoItem from '../ToDoItem'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { ToDo } from '../../types'

const ToDoListContainer = styled.div`
  width: 80%;
  padding: 3% 3% 3% 8%;
  margin: 1em auto;
`

let ToDoList = ({ visibleToDos }: { visibleToDos: Array<ToDo> }) => {
  const renderToDo = (toDo: ToDo) => <ToDoItem key={toDo.id} toDo={toDo} />
  return (
    <ToDoListContainer>
      {visibleToDos.map(renderToDo)}
    </ToDoListContainer>
  )
}

const getVisibleTodos = (todos: Array<ToDo>, filter: string): Array<ToDo> => {
  if (filter == 'all') {
    return todos
  }
  return todos.filter((todo, index) => {
    switch (filter) {
      case 'active':
        return !todo.completed
      case 'completed':
        return todo.completed
    }
  })
}

const mapStateToProps = (state: {
  toDos: Array<ToDo>,
  visibilityFilter: string
}) => ({
  visibleToDos: getVisibleTodos(state.toDos, state.visibilityFilter)
})

ToDoList = connect(mapStateToProps)(ToDoList)

export default ToDoList
