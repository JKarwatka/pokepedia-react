import React from 'react'
import { Card, Typography, Chip } from '@material-ui/core'

export const PokemonCard = ({ name, type }) => {
  return (
    <Card>
      <Typography variant='h3' component='h3'>
        {name}
      </Typography>
      {type && type.map(type => <Chip label={type} />)}

    </Card>
  )
}
