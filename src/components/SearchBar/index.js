import React from 'react'
import { FormControl, InputLabel, Input, InputAdornment } from '@material-ui/core'
import { Search } from '@material-ui/icons'
const SearchBar = props => {
  return (
    <FormControl variant='outlined'>
      <InputLabel htmlFor='searchbar'>Search ...</InputLabel>
      <Input
        id='searchbar'
        type='text'
        value=''
        onChange={() => null}
        endAdornment={
          <InputAdornment position='end'>
            <Search />
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

export default SearchBar
