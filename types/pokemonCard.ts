import { Ability2, Sprites, Stat, Cries } from './pokeapi/getPokemon'

export type PokemonCard = {
  name: string
  weight: number
  height: number
  abilities: Ability2[]
  stats: Stat[]
  sprites: Sprites
  cries: Cries
  types: string[]
  moves: string[]
}
