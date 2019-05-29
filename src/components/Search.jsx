import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Search({ inputSearchValue, searchInputOnChange, fetchTweets }) {
  return (
    <form onSubmit={e => fetchTweets(e, inputSearchValue)} className="search-form">
      <TextField
        id="outlined-name"
        label="Name"
        value={inputSearchValue}
        onChange={e => searchInputOnChange(e.target.value)}
        margin="normal"
        variant="outlined"
        className="search-input"
        autoComplete='off'
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="search-btn"
      >Search</Button>
    </form>
  )
}
