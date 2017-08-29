// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import { ToDo } from '../../types'

const ToDoText = styled.span`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  padding-left: 1.5em;
`

let ToDoItem = ({
  todo,
  handleToDoToggle
}: {
  todo: ToDo,
  handleToDoToggle: () => mixed
}) => {
  const { text, id, completed } = todo

  const path = completed
    ? <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    : <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />

  const icon = (
    <svg
      fill="CadetBlue"
      height="30"
      width="30"
      viewBox="0 0 24 24"
      style={{ verticalAlign: 'middle' }}
    >
      {path}
    </svg>
  )
  return (
    <div onClick={() => handleToDoToggle(id)}>
      {icon}
      <ToDoText completed={completed}>
        {text}
      </ToDoText>
    </div>
  )
}

export default ToDoItem
