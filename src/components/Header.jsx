import React from 'react';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { sortTypesList } from './../settings'

export default function Header({ sortType, sortTypeOnChange, savedPanelIsVisible, savedPanelToggle }) {
  return (
    <div className="header">
      <IconButton
        style={savedPanelIsVisible ? { background: 'rgba(66, 132,	244, .2)' } : null}
        onClick={savedPanelToggle}
      >
        <SaveIcon />
      </IconButton>
      <FormControl className="sort-by">
        <InputLabel shrink htmlFor="sort-label-placeholder">
          Sort by
        </InputLabel>
        <Select
          value={savedPanelIsVisible ? sortType : 'Recent'}
          onChange={e => sortTypeOnChange(e.target.value)}
          input={<Input name="sort" id="sort-label-placeholder" />}
          displayEmpty
          name="sort"
          disabled={!savedPanelIsVisible}
        >
          {
            sortTypesList.map(sortType => (
              <MenuItem value={sortType} key={sortType}>{sortType}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
  )
}
