import React from 'react';

import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <label className="input-group">
        <span className="name">Find contact by name</span>
        <input type="text" value={filter} onChange={onChange} />
      </label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
