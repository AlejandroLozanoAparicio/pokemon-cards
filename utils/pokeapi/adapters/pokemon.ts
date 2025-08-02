import { GetPokemonResponse } from 'types/pokeapi/getPokemon'

import { PokemonCard } from 'types/pokemonCard'

export const pokemonAdapter = (pokemon: GetPokemonResponse): PokemonCard => {
  const {
    name,
    types,
    moves,
    sprites,
    abilities,
    weight,
    height,
    stats,
    cries,
  } = pokemon

  return {
    name,
    weight,
    height,
    abilities,
    stats,
    sprites,
    cries,
    types: types.map((type) => type.type.name),
    moves: moves.map((move) => move.move.name),
  }
}
