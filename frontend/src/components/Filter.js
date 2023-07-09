import React from 'react';

const Filter = ({ label, options, handleFilter }) => {
  const handleChange = event => {
    const selectedOptions = [...event.target.options]
      .filter(option => option.selected)
      .map(option => option.value);
    handleFilter(selectedOptions);
  };

  return (
    <div className="filter">
      <label>{label}:</label>
      <select multiple onChange={handleChange}>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
