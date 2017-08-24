import React, { Component } from 'react'
import NewToDo from './Components/NewToDo'
import FilterSelection from './Components/FilterSelection'
import ToDoList from './Components/ToDoList'
import styled from 'styled-components'

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

const App = () =>
  <ToDoAppContainer>
    <ToDoApp>
      <NewToDo />
      <FilterSelection />
      <ToDoList />
    </ToDoApp>
  </ToDoAppContainer>

export default App
