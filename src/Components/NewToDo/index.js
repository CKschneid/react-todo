// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { changeToDoText, addToDo } from '../../Actions'

const NewToDoContainer = styled.div`
  width: 80%;
  margin: 1em auto;
`

const Input = styled.input`
  width: 60%;
  padding: 1em 0.5em;
  background-color: #fdfcf7;
  border: 1.5px solid cadetblue;
`

const Button = styled.button`
  width: 30%;
  margin-left: 3%;
  padding: 1em 0em;
  cursor: pointer;
  background-color: Cornsilk;
  color: CadetBlue;
  border: 1.5px solid CadetBlue;

  &:hover {
    background-color: CadetBlue;
    border: none;
    color: white;
  }
`

let NewToDo = ({ text, dispatch }: { text: string, dispatch: () => mixed }) =>
  <NewToDoContainer>
    <form
      onSubmit={e => {
        e.preventDefault()
        dispatch(addToDo(text))
      }}
    >
      <Input
        type="text"
        placeholder="ex. pay phone bill..."
        value={text}
        onChange={e => dispatch(changeToDoText(e.target.value))}
      />
      <Button type="submit"> ADD </Button>
    </form>
  </NewToDoContainer>

NewToDo = connect(state => ({
  text: state.toDoText
}))(NewToDo)

export default NewToDo
