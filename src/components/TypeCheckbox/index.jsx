import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isTypeChecked } from '../../store/selectors/pokemons'
import { FormControlLabel, Checkbox } from '@material-ui/core'
import { typeCheckboxToggled } from '../../store/actions/actions'

export const TypeCheckbox = ({ type }) => {
  const checked = useSelector(isTypeChecked(type))
  const dispach = useDispatch()

  return (
    <FormControlLabel
      checked={checked}
      control={
        <Checkbox
          name={type}
          onChange={() => dispach(typeCheckboxToggled(type, !checked))}
        />
      }
      label={type}
    />
  )
}
