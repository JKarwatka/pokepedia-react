import React from 'react'
import { useSelector } from 'react-redux'
import { getTypes } from '../../store/selectors/pokemons'
import { TypeCheckbox } from '../TypeCheckbox'

export const FiltersSection = () => {
  const types = useSelector(getTypes)

  return (
    <div>
      {
        types.map(type => <TypeCheckbox id={type} type={type} />)
      }
    </div>
  )
}
