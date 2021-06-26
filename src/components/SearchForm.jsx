import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

function SearchForm({ onFormSubmit, value, setValue }) {
  return (
    <form className="search-form" onSubmit={onFormSubmit}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button variant="contained" type="submit">Поиск</Button>
    </form>
  );
}

SearchForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default SearchForm;
