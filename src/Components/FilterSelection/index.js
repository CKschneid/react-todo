// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

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

const FilterSelection = ({
  selectedFilter,
  handleFilterChange
}: {
  selectedFilter: string,
  handleFilterChange: () => mixed
}) =>
  <Filter>
    {ITEMS.map(
      filter =>
        filter == selectedFilter
          ? <ActiveButton key={filter}>
              {filter}
            </ActiveButton>
          : <InactiveButton
              key={filter}
              onClick={() => handleFilterChange(filter)}
            >
              {filter}
            </InactiveButton>
    )}
  </Filter>

export default FilterSelection
