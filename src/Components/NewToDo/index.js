// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

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

const NewToDo = ({
  fieldValue,
  handleFieldChange,
  handleSubmitNew
}: {
  fieldValue: string,
  handleFieldChange: () => mixed,
  handleSubmitNew: () => mixed
}) =>
  <NewToDoContainer>
    <form
      onSubmit={e => {
        e.preventDefault()
        handleSubmitNew()
      }}
    >
      <Input
        type="text"
        placeholder="ex. pay phone bill..."
        value={fieldValue}
        onChange={e => handleFieldChange(e.target.value)}
      />
      <Button type="submit"> ADD </Button>
    </form>
  </NewToDoContainer>

export default NewToDo
