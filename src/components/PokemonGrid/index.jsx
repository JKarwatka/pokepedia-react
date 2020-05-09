import React from 'react'
import { Grid } from '@material-ui/core'
import { PokemonCard } from '../PokemonCard'
import { useSelector } from 'react-redux'
import { getPokemons } from '../../store/selectors/pokemons'

export const PokemonGrid = () => {
  const pokemons = useSelector(getPokemons)
  return (
    <Grid container spacing={3} >
      {
        pokemons.map(pokemon => (
          <Grid item xs={3}>
            <PokemonCard {...pokemon} />
          </Grid>
        )
        )
      }
    </Grid>
  )
}
