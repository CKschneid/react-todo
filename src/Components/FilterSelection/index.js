import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Filter = styled.div`
  width: 80%;
  margin: 1em auto;
`;
const Button = styled.button`
  width: 31%;
  padding: 1em 0em;
  cursor: pointer;
  margin: 1%;
`;
const ActiveButton = Button.extend`
  background-color: CadetBlue;
  color: white;
  border: none;
`;
const InactiveButton = Button.extend`
  background-color: Cornsilk;
  color: CadetBlue;
  border: 1.5px solid CadetBlue;

  &:hover {
    background-color: CadetBlue;
    color: Cornsilk;
    border: none;
  }
`;

const ITEMS = ['all', 'active', 'completed'];

export default class FilterSelection extends Component {
  render() {
    return (
      <Filter>
        {ITEMS.map((filter, index) =>
          <Link key={filter} to={`/${filter == 'all' ? '' : filter}`}>
            {filter == this.props.currentFilter
              ? <ActiveButton>
                  {filter}
                </ActiveButton>
              : <InactiveButton>
                  {filter}
                </InactiveButton>}
          </Link>
        )}
      </Filter>
    );
  }
}

FilterSelection.propTypes = {
  currentFilter: PropTypes.string
};
