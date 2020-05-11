export const getPokemons = state => state.pokemons

export const getTypes = state => state.pokemons.reduce(
  (types, pokemon) => {
    let typesArray = types
    pokemon.type.forEach(
      type => {
        if (!typesArray.includes(type)) {
          typesArray = [...typesArray, type]
        }
      }
    )
    return typesArray
  },
  []
)

const getFilters = state => state.filters

export const isTypeChecked = name => state => getFilters(state)[name]
