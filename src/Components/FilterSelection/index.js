// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../Actions'

const Filter = styled.div`
  width: 80%;
  margin: 1em auto;
`
const Button = styled.button`
  width: 31%;
  padding: 1em 0em;
  cursor: pointer;
  margin: 1%;
`
const ActiveButton = Button.extend`
  background-color: CadetBlue;
  color: white;
  border: none;
`
const InactiveButton = Button.extend`
  background-color: Cornsilk;
  color: CadetBlue;
  border: 1.5px solid CadetBlue;

  &:hover {
    background-color: CadetBlue;
    color: Cornsilk;
    border: none;
  }
`

const ITEMS = ['all', 'active', 'completed']

let FilterSelection = ({
  currentFilter,
  dispatch
}: {
  currentFilter: string,
  dispatch: () => mixed
}) =>
  <Filter>
    {ITEMS.map(
      (filter, index) =>
        filter == currentFilter
          ? <ActiveButton key={filter}>
              {filter}
            </ActiveButton>
          : <InactiveButton
              key={filter}
              onClick={() => dispatch(setVisibilityFilter(filter))}
            >
              {filter}
            </InactiveButton>
    )}
  </Filter>

FilterSelection = connect(state => ({
  currentFilter: state.visibilityFilter
}))(FilterSelection)

export default FilterSelection
