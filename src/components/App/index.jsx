import React from 'react'
import SearchBar from '../SearchBar'
import { Title } from '../Title'
import { PokemonGrid } from '../PokemonGrid'
import styled from 'styled-components'

const AppContainer = styled.div`
  background-color: salmon;
  min-height: 100vh;
`

const App = () => (
  <AppContainer >
    <Title />
    <SearchBar />
    <PokemonGrid />
  </AppContainer>
)

export default App
