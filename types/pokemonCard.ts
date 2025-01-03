import { Ability2, Sprites, Stat } from './pokeapi/getPokemon'

export type PokemonCard = {
  name: string
  weight: number
  height: number
  abilities: Ability2[]
  stats: Stat[]
  sprites: Sprites
  types: string[]
  moves: string[]
}
