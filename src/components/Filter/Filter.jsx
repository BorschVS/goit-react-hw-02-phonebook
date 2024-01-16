import React from 'react';
import './Filter.scss';

const Filter = ({ filter, onChange }) => {
  return (
    <label className="Filter__label">
      Find contact
      <input
        className="Filter__input"
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Rosie Simpson"
      />
    </label>
  );
};

export default Filter;
