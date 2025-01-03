import { GetPokemonResponse } from 'types/pokeapi/getPokemon'

import { PokemonCard } from 'types/pokemonCard'

export const pokemonAdapter = (pokemon: GetPokemonResponse): PokemonCard => {
  const { name, types, moves, sprites, abilities, weight, height, stats } =
    pokemon

  return {
    name,
    weight,
    height,
    abilities,
    stats,
    sprites,
    types: types.map((type) => type.type.name),
    moves: moves.map((move) => move.move.name),
  }
}
